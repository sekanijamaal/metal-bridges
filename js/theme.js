/* Applies the saved appearance before page stylesheets are loaded. */
(function () {
    const root = document.documentElement;
    const preferenceKey = 'theme';
    const validPreferences = ['light', 'dark', 'system'];
    const systemTheme = window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;

    function readPreference() {
        try {
            const savedPreference = window.localStorage.getItem(preferenceKey);
            return validPreferences.includes(savedPreference) ? savedPreference : 'system';
        } catch (error) {
            console.warn('Theme preference could not be read from local storage.', error);
            return 'system';
        }
    }

    let preference = readPreference();

    function applyTheme() {
        const theme = preference === 'system'
            ? (systemTheme && systemTheme.matches ? 'dark' : 'light')
            : preference;

        root.setAttribute('data-theme', theme);
        root.setAttribute('data-theme-preference', preference);
        root.style.colorScheme = theme;

        const toggle = document.querySelector('[data-theme-toggle]');
        if (toggle) {
            const nextPreference = preference === 'system'
                ? 'light'
                : preference === 'light'
                    ? 'dark'
                    : 'system';
            const currentLabel = preference.charAt(0).toUpperCase() + preference.slice(1);
            const nextLabel = nextPreference.charAt(0).toUpperCase() + nextPreference.slice(1);
            toggle.setAttribute('aria-label', `Color theme: ${currentLabel}. Activate to switch to ${nextLabel}.`);
            toggle.setAttribute('title', `Switch to ${nextLabel} theme`);
            toggle.querySelectorAll('[data-theme-icon]').forEach((icon) => {
                if (icon.dataset.themeIcon === preference) {
                    icon.removeAttribute('hidden');
                } else {
                    icon.setAttribute('hidden', '');
                }
            });
        }
    }

    function setPreference(nextPreference) {
        if (!validPreferences.includes(nextPreference)) {
            return;
        }

        preference = nextPreference;
        applyTheme();

        try {
            window.localStorage.setItem(preferenceKey, preference);
        } catch (error) {
            console.warn('Theme preference could not be saved to local storage.', error);
        }
    }

    applyTheme();

    if (systemTheme) {
        const handleSystemThemeChange = function () {
            if (preference === 'system') {
                applyTheme();
            }
        };

        if (typeof systemTheme.addEventListener === 'function') {
            systemTheme.addEventListener('change', handleSystemThemeChange);
        } else if (typeof systemTheme.addListener === 'function') {
            systemTheme.addListener(handleSystemThemeChange);
        }
    }

    window.addEventListener('storage', function (event) {
        if (event.key === preferenceKey) {
            preference = validPreferences.includes(event.newValue) ? event.newValue : 'system';
            applyTheme();
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.querySelector('[data-theme-toggle]');
        if (toggle) {
            toggle.addEventListener('click', function () {
                const nextPreference = preference === 'system'
                    ? 'light'
                    : preference === 'light'
                        ? 'dark'
                        : 'system';
                setPreference(nextPreference);
            });
        }
        applyTheme();
    });
})();
