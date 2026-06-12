/* ==========================================
   SOUTH SUDAN DIGITAL HUB - JAVASCRIPT
   =========================================== */

// ============================================
// 1. DATA OBJECTS AND ARRAYS
// ============================================

const quizQuestions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: [
            { text: "Hyper Text Markup Language", points: 1 },
            { text: "High Tech Modern Language", points: 0 },
            { text: "Home Tool Markup Language", points: 0 }
        ]
    },
    {
        id: 2,
        question: "Which of these is NOT a programming language?",
        options: [
            { text: "HTML", points: 1 },
            { text: "Python", points: 0 },
            { text: "JavaScript", points: 0 }
        ]
    },
    {
        id: 3,
        question: "What is the primary purpose of CSS?",
        options: [
            { text: "Structure HTML documents", points: 0 },
            { text: "Style and layout web pages", points: 1 },
            { text: "Create server-side logic", points: 0 }
        ]
    },
    {
        id: 4,
        question: "Which skill is most in-demand in tech?",
        options: [
            { text: "Web Development", points: 1 },
            { text: "Data Analysis", points: 1 },
            { text: "Cloud Computing", points: 1 }
        ]
    },
    {
        id: 5,
        question: "How do you become a better programmer?",
        options: [
            { text: "Build projects constantly", points: 1 },
            { text: "Read others' code", points: 1 },
            { text: "Practice debugging", points: 1 }
        ]
    }
];

const skillLevels = {
    beginner: {
        maxScore: 2,
        badge: "🌱",
        title: "Beginner",
        message: "You're just starting your tech journey! Focus on mastering HTML, CSS, and JavaScript fundamentals.",
        path: ["Introduction to Web Development", "HTML & CSS Basics", "JavaScript Essentials"]
    },
    intermediate: {
        maxScore: 3,
        badge: "🚀",
        title: "Intermediate",
        message: "Great progress! You have solid fundamentals. Now dive deeper into frameworks and advanced concepts.",
        path: ["React.js Fundamentals", "Backend Development", "Database Design"]
    },
    advanced: {
        maxScore: 5,
        badge: "⭐",
        title: "Advanced",
        message: "Impressive! You're ready for specialized roles. Consider full-stack development or specialization.",
        path: ["Full Stack Development", "DevOps & Deployment", "System Architecture"]
    }
};

const opportunities = [
    {
        id: 1,
        type: "job",
        title: "Junior Web Developer",
        company: "TechStart Juba",
        location: "Juba, South Sudan",
        salary: "$300-400/month or remote",
        description: "We're seeking passionate web developers to build responsive websites for African markets.",
        skillLevel: "intermediate",
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 2,
        type: "internship",
        title: "UI/UX Design Internship",
        company: "Digital Futures",
        location: "Remote",
        salary: "Unpaid (Portfolio building)",
        description: "Design beautiful user interfaces for mobile apps. Perfect for building your design portfolio.",
        skillLevel: "beginner",
        skills: ["Design", "Figma", "User Research"]
    },
    {
        id: 3,
        type: "training",
        title: "Full Stack Web Development Course",
        company: "SSDH Academy",
        location: "Online",
        salary: "Free - $50",
        description: "12-week intensive course covering frontend and backend development with practical projects.",
        skillLevel: "beginner",
        skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"]
    },
    {
        id: 4,
        type: "job",
        title: "Data Analyst",
        company: "South Sudan Analytics Co.",
        location: "Hybrid",
        salary: "$400-500/month",
        description: "Help businesses make data-driven decisions. Work with Python, SQL, and data visualization tools.",
        skillLevel: "intermediate",
        skills: ["Python", "SQL", "Data Visualization", "Excel"]
    },
    {
        id: 5,
        type: "resource",
        title: "LinkedIn Learning Path",
        company: "LinkedIn",
        location: "Online",
        salary: "Free with premium membership",
        description: "Comprehensive learning paths for various tech skills with certificates upon completion.",
        skillLevel: "beginner",
        skills: ["Self-learning", "Certification"]
    },
    {
        id: 6,
        type: "job",
        title: "Mobile App Developer",
        company: "Flutter Innovations",
        location: "Remote",
        salary: "$500-700/month",
        description: "Develop cross-platform mobile applications using Flutter. Remote work opportunity.",
        skillLevel: "advanced",
        skills: ["Flutter", "Dart", "Mobile Development"]
    }
];

const innovations = [
    {
        icon: "💡",
        title: "Tech Startups",
        description: "Young entrepreneurs building innovative solutions for African challenges using technology and creativity."
    },
    {
        icon: "🌐",
        title: "Internet Connectivity",
        description: "Projects expanding broadband access and internet infrastructure across South Sudan's rural areas."
    },
    {
        icon: "📱",
        title: "Mobile Solutions",
        description: "Apps and platforms designed specifically for mobile-first users in South Sudan and East Africa."
    },
    {
        icon: "👥",
        title: "Tech Communities",
        description: "Developer communities, tech meetups, and networking events fostering collaboration and knowledge sharing."
    }
];

// ============================================
// 2. UTILITY FUNCTIONS
// ============================================

/**
 * Initialize dark mode preference from localStorage
 */
function initializeDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode === 'true' || (savedMode === null && prefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeButton();
    }
}

/**
 * Toggle dark mode and save preference
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeButton();
}

/**
 * Update theme button text based on current mode
 */
function updateThemeButton() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        const isDark = document.body.classList.contains('dark-mode');
        btn.textContent = isDark ? '☀️' : '🌙';
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (navMenu) {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
}

/**
 * Close mobile menu when a link is clicked
 */
function closeMobileMenuOnClick() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Display form message
 */
function showFormMessage(elementId, message, type) {
    const messageEl = document.getElementById(elementId);
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';
    }
}

/**
 * Show error message in form field
 */
function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = field?.parentElement?.querySelector('.error-message');
    
    if (errorEl) {
        errorEl.textContent = message;
    }
    
    if (field) {
        field.style.borderColor = '#EF4444';
    }
}

/**
 * Clear field error
 */
function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = field?.parentElement?.querySelector('.error-message');
    
    if (errorEl) {
        errorEl.textContent = '';
    }
    
    if (field) {
        field.style.borderColor = '';
    }
}

// ============================================
// 3. QUIZ FUNCTIONALITY
// ============================================

/**
 * Render quiz questions to the DOM using template literals
 */
function renderQuizQuestions() {
    const quizContainer = document.getElementById('quizQuestions');
    
    if (!quizContainer) return;
    
    const questionsHTML = quizQuestions.map(question => `
        <div class="quiz-question">
            <p style="font-weight: 600; margin-bottom: 1rem;">${question.question}</p>
            ${question.options.map((option, index) => `
                <label>
                    <input 
                        type="radio" 
                        name="question-${question.id}" 
                        value="${index}" 
                        data-points="${option.points}"
                    >
                    ${option.text}
                </label>
            `).join('')}
        </div>
    `).join('');
    
    quizContainer.innerHTML = questionsHTML;
}

/**
 * Calculate quiz score
 */
function calculateQuizScore(answers) {
    return answers.reduce((total, answer) => total + answer.points, 0);
}

/**
 * Get skill level based on score
 */
function getSkillLevel(score) {
    if (score <= skillLevels.beginner.maxScore) {
        return 'beginner';
    } else if (score <= skillLevels.intermediate.maxScore) {
        return 'intermediate';
    } else {
        return 'advanced';
    }
}

/**
 * Handle quiz submission
 */
function handleQuizSubmit(event) {
    event.preventDefault();
    
    const answers = [];
    quizQuestions.forEach(question => {
        const selected = document.querySelector(`input[name="question-${question.id}"]:checked`);
        
        if (selected) {
            answers.push({
                question: question.id,
                points: parseInt(selected.dataset.points)
            });
        }
    });
    
    if (answers.length !== quizQuestions.length) {
        alert('Please answer all questions!');
        return;
    }
    
    const totalScore = calculateQuizScore(answers);
    const level = getSkillLevel(totalScore);
    const levelData = skillLevels[level];
    
    // Save quiz result to localStorage
    const quizResult = {
        score: totalScore,
        level: level,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('lastQuizResult', JSON.stringify(quizResult));
    
    // Display results
    displayQuizResults(levelData, totalScore);
}

/**
 * Display quiz results with template literals
 */
function displayQuizResults(levelData, score) {
    const quizForm = document.getElementById('quizForm');
    const quizResults = document.getElementById('quizResults');
    const resultBadge = document.getElementById('resultBadge');
    const resultMessage = document.getElementById('resultMessage');
    const recommendedPath = document.getElementById('recommendedPath');
    
    if (quizForm) quizForm.style.display = 'none';
    if (quizResults) {
        quizResults.style.display = 'block';
        resultBadge.innerHTML = `
            <div style="font-size: 4rem; margin: 1rem 0;">${levelData.badge}</div>
            <h2 style="color: var(--navy); border: none; padding: 0; margin-bottom: 0.5rem;">${levelData.title}</h2>
            <p style="color: var(--text-light);">Score: ${score}/5</p>
        `;
        
        resultMessage.textContent = levelData.message;
        
        recommendedPath.innerHTML = `
            <h4 style="color: var(--navy); margin-top: 1.5rem;">Recommended Learning Path:</h4>
            <ul style="margin-left: 1.5rem;">
                ${levelData.path.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }
}

// ============================================
// 4. FEATURED OPPORTUNITIES
// ============================================

/**
 * Render featured opportunities on home page
 */
function renderFeaturedOpportunities() {
    const container = document.getElementById('opportunityCards');
    
    if (!container) return;
    
    const featured = opportunities.slice(0, 3);
    
    const html = featured.map(opp => `
        <div class="opportunity-card">
            <div class="opportunity-type">${opp.type.charAt(0).toUpperCase() + opp.type.slice(1)}</div>
            <h3 class="opportunity-title">${opp.title}</h3>
            <p class="opportunity-company">${opp.company}</p>
            <p class="opportunity-description">${opp.description}</p>
            <p style="color: var(--green); font-weight: 600; margin-top: 0.75rem;">📍 ${opp.location}</p>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

/**
 * Render all opportunities on opportunities page with filtering
 */
function renderOpportunities(filtered = opportunities) {
    const container = document.getElementById('opportunitiesList');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    if (filtered.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        resultsCount.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    resultsCount.textContent = filtered.length;
    
    const html = filtered.map(opp => `
        <div class="opportunity-item">
            <h3>${opp.title}</h3>
            <div class="opportunity-meta">
                <span class="meta-tag">${opp.type.charAt(0).toUpperCase() + opp.type.slice(1)}</span>
                <span class="meta-tag">${opp.skillLevel.charAt(0).toUpperCase() + opp.skillLevel.slice(1)}</span>
            </div>
            <p><strong>${opp.company}</strong></p>
            <p>📍 ${opp.location}</p>
            <p>💰 ${opp.salary}</p>
            <p style="margin: 1rem 0;">${opp.description}</p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${opp.skills.map(skill => `<span style="background-color: rgba(16, 185, 129, 0.2); padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem;">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

/**
 * Filter opportunities based on selected filters
 */
function filterOpportunities() {
    const typeFilter = document.getElementById('typeFilter')?.value || '';
    const skillFilter = document.getElementById('skillFilter')?.value || '';
    
    const filtered = opportunities.filter(opp => {
        const typeMatch = !typeFilter || opp.type === typeFilter;
        const skillMatch = !skillFilter || opp.skillLevel === skillFilter;
        return typeMatch && skillMatch;
    });
    
    renderOpportunities(filtered);
}

/**
 * Reset filters to show all opportunities
 */
function resetFilters() {
    const typeFilter = document.getElementById('typeFilter');
    const skillFilter = document.getElementById('skillFilter');
    
    if (typeFilter) typeFilter.value = '';
    if (skillFilter) skillFilter.value = '';
    
    renderOpportunities(opportunities);
}

// ============================================
// 5. INNOVATIONS SECTION
// ============================================

/**
 * Render innovation cards using template literals
 */
function renderInnovations() {
    const container = document.getElementById('innovationGrid');
    
    if (!container) return;
    
    const html = innovations.map(innovation => `
        <div class="innovation-card">
            <div class="innovation-icon">${innovation.icon}</div>
            <h3>${innovation.title}</h3>
            <p>${innovation.description}</p>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// ============================================
// 6. NEWSLETTER FORM
// ============================================

/**
 * Handle newsletter form submission
 */
function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('userName');
    const emailInput = document.getElementById('userEmail');
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    
    // Clear previous errors
    clearFieldError('userName');
    clearFieldError('userEmail');
    
    // Validate inputs
    let isValid = true;
    
    if (!nameInput.value.trim()) {
        showFieldError('userName', 'Name is required');
        isValid = false;
    }
    
    if (!emailInput.value.trim()) {
        showFieldError('userEmail', 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showFieldError('userEmail', 'Please enter a valid email');
        isValid = false;
    }
    
    const selectedInterests = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    if (selectedInterests.length === 0) {
        showFormMessage('formMessage', 'Please select at least one interest', 'error');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Save to localStorage
    const subscriberData = {
        name: nameInput.value,
        email: emailInput.value,
        interests: selectedInterests,
        subscriptionDate: new Date().toISOString()
    };
    
    // Get existing subscribers
    const subscribers = JSON.parse(localStorage.getItem('subscribers')) || [];
    subscribers.push(subscriberData);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
    
    // Show success message
    showFormMessage('formMessage', `Thanks ${nameInput.value}! You've been subscribed to our newsletter.`, 'success');
    
    // Reset form
    document.getElementById('newsletterForm').reset();
    
    // Clear message after 3 seconds
    setTimeout(() => {
        const messageEl = document.getElementById('formMessage');
        if (messageEl) messageEl.style.display = 'none';
    }, 3000);
}

// ============================================
// 7. CONTACT FORM
// ============================================

/**
 * Handle contact form submission
 */
function handleContactSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');
    
    // Validate
    let isValid = true;
    
    if (!nameInput?.value.trim()) {
        isValid = false;
    }
    
    if (!emailInput?.value.trim() || !validateEmail(emailInput.value)) {
        isValid = false;
    }
    
    if (!subjectInput?.value.trim()) {
        isValid = false;
    }
    
    if (!messageInput?.value.trim()) {
        isValid = false;
    }
    
    if (!isValid) {
        showFormMessage('contactMessage', 'Please fill in all fields correctly', 'error');
        return;
    }
    
    // Save to localStorage
    const message = {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
        timestamp: new Date().toISOString()
    };
    
    const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    messages.push(message);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    
    // Show success
    showFormMessage('contactMessage', 'Thank you! Your message has been sent. We will reply within 24 hours.', 'success');
    
    // Reset form
    event.target.reset();
    
    setTimeout(() => {
        const messageEl = document.getElementById('contactMessage');
        if (messageEl) messageEl.style.display = 'none';
    }, 3000);
}

// ============================================
// 8. INITIALIZATION
// ============================================

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode
    initializeDarkMode();
    
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', toggleDarkMode);
    });
    
    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    closeMobileMenuOnClick();
    
    // Quiz
    renderQuizQuestions();
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', handleQuizSubmit);
    }
    
    // Featured opportunities
    renderFeaturedOpportunities();
    
    // Opportunities page filters
    const typeFilter = document.getElementById('typeFilter');
    const skillFilter = document.getElementById('skillFilter');
    const resetButton = document.getElementById('resetFilters');
    
    if (typeFilter) typeFilter.addEventListener('change', filterOpportunities);
    if (skillFilter) skillFilter.addEventListener('change', filterOpportunities);
    if (resetButton) resetButton.addEventListener('click', resetFilters);
    
    // Render all opportunities on page load
    if (document.getElementById('opportunitiesList')) {
        renderOpportunities(opportunities);
    }
    
    // Innovations
    renderInnovations();
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Check if user has taken quiz before and show in console
    const lastResult = localStorage.getItem('lastQuizResult');
    if (lastResult) {
        console.log('Last quiz result:', JSON.parse(lastResult));
    }
});

// ============================================
// 9. OPTIONAL: DYNAMIC STATISTICS ANIMATION
// ============================================

/**
 * Animate statistics numbers when in view
 */
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const finalValue = element.textContent;
                const numericValue = parseInt(finalValue);
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 30;
                    
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            element.textContent = finalValue;
                            clearInterval(timer);
                        } else {
                            element.textContent = `${Math.floor(currentValue)}${finalValue.replace(/[0-9]/g, '')}`;
                        }
                    }, 30);
                }
                
                observer.unobserve(element);
            }
        });
    });
    
    statNumbers.forEach(number => observer.observe(number));
}

// Call animation when page loads
document.addEventListener('DOMContentLoaded', animateStatistics);
