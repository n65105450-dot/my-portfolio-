document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-ready');
    initScrollProgress();
    initMobileNavigation();
    initTypingAnimation();
    initCounterAnimations();
    initScrollRevealAnimation();
    initSkillProgressBars();
    initMouseGlowEffect();
    initTiltCards();
    initButtonRipple();
    initParallaxBackground();
    initThumbnailLinkControls();
});

function initThumbnailLinkControls() {
    const storageKey = 'lokbharati_live_link';
    const defaultLink = 'https://www.youtube.com/live/vfP7J8XWBU4?si=NidibgoKhxRgW35j';
    const watchBtn = document.getElementById('live-watch');
    const editBtn = document.getElementById('edit-live');
    if (!watchBtn || !editBtn) return;
    const current = localStorage.getItem(storageKey) || defaultLink;
    watchBtn.href = current;
    editBtn.addEventListener('click', () => {
        const newLink = prompt('Enter YouTube live URL or video URL:', current);
        if (!newLink) return;
        try {
            // basic validation
            new URL(newLink);
            localStorage.setItem(storageKey, newLink);
            watchBtn.href = newLink;
            alert('Link updated. Click "Watch" to open it.');
        } catch (err) {
            alert('Invalid URL. Please include the full URL (https://...).');
        }
    });
}

function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    window.addEventListener('scroll', () => {
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScrollHeight > 0) {
            const percentageScrolled = (window.pageYOffset / totalScrollHeight) * 100;
            progressBar.style.width = `${percentageScrolled}%`;
        }
    });
}

function initMobileNavigation() {
    const menuToggle = document.querySelector('.hamburger');
    const navMenuLinks = document.querySelector('.nav-links');
    if (!menuToggle || !navMenuLinks) return;
    const lineOne = menuToggle.children[0];
    const lineTwo = menuToggle.children[1];
    const lineThree = menuToggle.children[2];

    const toggleMenu = () => {
        navMenuLinks.classList.toggle('active');
        if (navMenuLinks.classList.contains('active')) {
            lineOne.style.transform = 'rotate(45deg) translate(6px, 6px)';
            lineTwo.style.opacity = '0';
            lineThree.style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            lineOne.style.transform = 'none';
            lineTwo.style.opacity = '1';
            lineThree.style.transform = 'none';
        }
    };

    menuToggle.addEventListener('click', toggleMenu);
    navMenuLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenuLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenuLinks.classList.contains('active')) {
            navMenuLinks.classList.remove('active');
            lineOne.style.transform = 'none';
            lineTwo.style.opacity = '1';
            lineThree.style.transform = 'none';
        }
    });
}

function initTypingAnimation() {
    const typingTargetElement = document.querySelector('.typing-text');
    if (!typingTargetElement) return;
    const operationalWords = ['Student at Lokbharati', 'Full Stack Developer', 'Creative Visual Thinker'];
    let selectedWordIndex = 0;
    let characterPointer = 0;
    let deletionStateActive = false;

    function executionCycle() {
        const structuralCurrentWord = operationalWords[selectedWordIndex];
        if (deletionStateActive) {
            typingTargetElement.textContent = structuralCurrentWord.substring(0, characterPointer - 1);
            characterPointer -= 1;
        } else {
            typingTargetElement.textContent = structuralCurrentWord.substring(0, characterPointer + 1);
            characterPointer += 1;
        }
        let algorithmicTimingDelay = deletionStateActive ? 55 : 110;
        if (!deletionStateActive && characterPointer === structuralCurrentWord.length) {
            algorithmicTimingDelay = 2000;
            deletionStateActive = true;
        } else if (deletionStateActive && characterPointer === 0) {
            deletionStateActive = false;
            selectedWordIndex = (selectedWordIndex + 1) % operationalWords.length;
            algorithmicTimingDelay = 450;
        }
        setTimeout(executionCycle, algorithmicTimingDelay);
    }

    setTimeout(executionCycle, 400);
}

function initCounterAnimations() {
    const targetedMetricCounters = document.querySelectorAll('.counter-trigger');
    if (targetedMetricCounters.length === 0) return;
    const configurationObserver = new IntersectionObserver((monitoredEntries, coreObserver) => {
        monitoredEntries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetNode = entry.target;
                const endpointValue = parseInt(targetNode.getAttribute('data-target'), 10);
                let processingStartValue = 0;
                const dynamicDuration = 1800;
                const processSteps = 50;
                const incrementDelta = endpointValue / processSteps;
                const intervalStepTime = dynamicDuration / processSteps;
                const recursiveTimer = setInterval(() => {
                    processingStartValue += incrementDelta;
                    if (processingStartValue >= endpointValue) {
                        targetNode.textContent = endpointValue;
                        clearInterval(recursiveTimer);
                    } else {
                        targetNode.textContent = Math.floor(processingStartValue);
                    }
                }, intervalStepTime);
                coreObserver.unobserve(targetNode);
            }
        });
    }, { threshold: 0.45 });
    targetedMetricCounters.forEach(counter => configurationObserver.observe(counter));
}

function initScrollRevealAnimation() {
    const structuralRevealElements = document.querySelectorAll('.reveal');
    if (structuralRevealElements.length === 0) return;
    const layoutObserver = new IntersectionObserver((observedEntries) => {
        observedEntries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });
    structuralRevealElements.forEach(element => layoutObserver.observe(element));
}

function initSkillProgressBars() {
    const structuralLinearBars = document.querySelectorAll('.skill-progress-fill');
    const structuralCircleBars = document.querySelectorAll('.circle-fill');
    if (structuralLinearBars.length === 0 && structuralCircleBars.length === 0) return;
    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const node = entry.target;
                if (node.classList.contains('skill-progress-fill')) {
                    const designatedWidth = node.getAttribute('data-percentage');
                    node.style.width = `${designatedWidth}%`;
                } else if (node.classList.contains('circle-fill')) {
                    const structuralPercent = parseInt(node.getAttribute('data-percentage'), 10);
                    const systemRadius = 54;
                    const computedCircumference = 2 * Math.PI * systemRadius;
                    const explicitOffset = computedCircumference - (structuralPercent / 100) * computedCircumference;
                    node.style.strokeDashoffset = explicitOffset;
                }
                metricObserver.unobserve(node);
            }
        });
    }, { threshold: 0.22 });
    structuralLinearBars.forEach(bar => metricObserver.observe(bar));
    structuralCircleBars.forEach(circle => metricObserver.observe(circle));
}

function initMouseGlowEffect() {
    if (window.innerWidth < 768) return;
    const reactiveCards = document.querySelectorAll('.glass-card');
    reactiveCards.forEach(card => {
        card.addEventListener('mousemove', (event) => {
            const layoutBoundingRect = card.getBoundingClientRect();
            const coordinateX = event.clientX - layoutBoundingRect.left;
            const coordinateY = event.clientY - layoutBoundingRect.top;
            card.style.background = `radial-gradient(800px circle at ${coordinateX}px ${coordinateY}px, rgba(181, 123, 181, 0.16), rgba(255, 255, 255, 0.58))`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--glass-bg)';
        });
    });
}

function initTiltCards() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (event) => {
            const bounds = card.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const centerX = bounds.width / 2;
            const centerY = bounds.height / 2;
            const rotateX = ((y - centerY) / centerY) * 6;
            const rotateY = ((x - centerX) / centerX) * -6;
            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

function initButtonRipple() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
            ripple.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        });
    });
}

function initParallaxBackground() {
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length === 0) return;
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        shapes.forEach((shape, index) => {
            const depth = index === 0 ? 0.04 : 0.06;
            shape.style.transform = `translateY(${scrollValue * depth}px)`;
        });
    });
}
