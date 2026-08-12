/* Menu panel + theme toggle.
 *
 * The hamburger -> X animation is pure CSS (see _sass/interactive-elements.scss).
 * This file only manages state: the .active / .open classes, outside-click and
 * Escape dismissal, and theme persistence.
 *
 * Note: the previous implementation drove the icon with a GSAP timeline that
 * referenced an undefined `path` global, which threw partway through building
 * the timeline and left the menu permanently hidden. It also wrote inline
 * background styles onto the bars, which outranked the stylesheet. Both are
 * gone — GSAP is no longer involved in the menu.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'nz-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }

    var label = document.getElementById('theme-label');
    if (label) {
      label.textContent = theme === 'light' ? 'Light' : 'Dark';
    }

    var icon = document.querySelector('.menu-row-label i');
    if (icon) {
      icon.className = theme === 'light'
        ? 'fa-regular fa-sun'
        : 'fa-regular fa-moon';
    }
  }

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;   // private mode / storage disabled
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* non-fatal: theme just won't persist across pages */
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggle-btn');
    var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('site-menu');
    var themeToggle = document.getElementById('theme-toggle');

    /* ---- theme ---- */

    if (themeToggle) {
      // The inline script in <head> has already set data-theme to avoid a
      // flash of the wrong theme. Sync the checkbox to whatever it chose.
      var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      themeToggle.checked = current === 'light';
      applyTheme(current);

      themeToggle.addEventListener('change', function () {
        var next = themeToggle.checked ? 'light' : 'dark';
        applyTheme(next);
        storeTheme(next);
      });
    }

    /* ---- menu open/close ---- */

    if (!toggleBtn || !menu || !hamburger) {
      return;
    }

    function setOpen(open) {
      hamburger.classList.toggle('active', open);
      menu.classList.toggle('open', open);
      toggleBtn.setAttribute('aria-expanded', String(open));
      toggleBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
    }

    function isOpen() {
      return menu.classList.contains('open');
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!isOpen());
    });

    // Keyboard activation, since the button is a div rather than a <button>.
    toggleBtn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setOpen(!isOpen());
      }
    });

    // Clicks inside the panel must not bubble out to the document handler,
    // otherwise flipping the switch would immediately close the menu.
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.addEventListener('click', function () {
      if (isOpen()) {
        setOpen(false);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) {
        setOpen(false);
        toggleBtn.focus();
      }
    });
  });
})();
