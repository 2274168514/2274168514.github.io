(() => {
    const root = document.documentElement;
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
        const applyTheme = (theme) => {
            root.dataset.theme = theme;
            const dark = theme === 'dark';
            toggle.textContent = dark ? '浅色' : '深色';
            toggle.setAttribute('aria-label', dark ? '切换为浅色模式' : '切换为深色模式');
            toggle.setAttribute('aria-pressed', String(dark));
            document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#171d24' : '#ffffff');
        };
        let storedTheme;
        try { storedTheme = localStorage.getItem('guangyu-theme'); } catch (_) { /* Storage may be disabled. */ }
        applyTheme(storedTheme === 'dark' ? 'dark' : 'light');
        toggle.hidden = false;
        toggle.addEventListener('click', () => {
            const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(theme);
            try { localStorage.setItem('guangyu-theme', theme); } catch (_) { /* Theme works without persistence. */ }
        });
    }

    const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];
    const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
    if (!sections.length) return;
    let scheduled = false;
    const updateActive = () => {
        scheduled = false;
        let current = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= 150) current = section;
        }
        if (window.scrollY + window.innerHeight >= root.scrollHeight - 2) {
            current = sections[sections.length - 1];
        }
        for (const link of links) {
            const active = link.hash === '#' + current.id;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        }
    };
    const requestUpdate = () => {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(updateActive);
        }
    };
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('hashchange', requestUpdate);
    updateActive();
})();
