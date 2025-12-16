// Articles data
const articlesData = [
    {
        id: 1,
        title: "En Russie, les cosaques reprennent du service à la faveur de la guerre en Ukraine",
        excerpt: "En Russie, les agents de police ne sont pas seuls à patrouiller les rues.",
        label: "breaking",
        category: "us",
        readTime: "6 min read",
        timeAgo: "2 hours ago",
        imageUrl: "images/485c738e8132503d95c3034569fcb16b.webp",
        size: "normal",
        fullContent: "Persécutés durant la période soviétique, les cosaques de Russie ont épousé le tournant autoritaire et impérialiste pris par le Kremlin au long du XXIᵉ siècle. Maintien de l’ordre, encadrement de la jeunesse et déploiement sur les champs de bataille d’Ukraine, ils sont désormais de précieux auxiliaires de la politique de Vladimir Poutine."
    }
];

// Combined articles section (Climate + Stock)
const combinedSectionArticles = [
    {
        id: 4,
        title: "Climate Summit Reaches Historic Agreement",
        label: "breaking",
        readTime: "7 min read",
        timeAgo: "4 hours ago",
        imageUrl: "images/COP28_Dubai.jpg",
        fullContent: "World leaders commit to ambitious carbon reduction targets in landmark environmental accord.",
        type: "climate"
    },
    {
        id: 5,
        title: "Une professeure en informatique remarquable",
        excerpt: "Gentille, attentive et très appréciée par ses étudiants.",
        readTime: "3 min read",
        timeAgo: "3 hours ago",
        imageUrl: "images/unnamed.jpg",
        fullContent: "Quatre étudiants de l’École Supérieure de Technologie classent la professeure Lamya Anoir parmi les meilleures professeures au Maroc, en reconnaissance de sa bienveillance, de sa gentillesse et de son engagement pédagogique.",
        type: "stock"
    }
];

// Slider articles data (3 slides)
const sliderArticles = [
    {
        id: 2,
        title: "Trump et Zelensky s’affrontent lors d’un échange tendu à la Maison-Blanche.",
        excerpt: "Volodymyr Zelensky a eu un échange très tendu avec Donald Trump à la Maison-Blanche.",
        label: "live",
        readTime: "4 min read",
        timeAgo: "3 hours ago",
        imageUrl: "images/Miniature.avif",
        fullContent: "Lors de sa visite à Washington, Volodymyr Zelensky a eu un échange très tendu avec Donald Trump à la Maison-Blanche. La discussion, prévue pour renforcer la coopération entre les États-Unis et l’Ukraine, a rapidement dégénéré. Trump a reproché à Zelensky son attitude et son manque de reconnaissance envers l’aide américaine.",
        isExternal: true,
        externalUrl: "Live%20Page.html"
    },
    {
        id: 3,
        title: "Qui est Ahmed al-Charaa ?",
        excerpt: "Il s’est imposé au fil des années comme l’un des acteurs les plus influents du nord-ouest de la Syrie",
        label: "breaking",
        readTime: "5 min read",
        timeAgo: "1 hour ago",
        imageUrl: "images/Ahmed - Charaa.jpg",
        fullContent: "Ahmed al-Charaa, plus connu sous le nom d’Abou Mohammed al-Joulani, est une figure centrale syrien. Il s’est imposé au fil des années comme l’un des acteurs les plus influents du nord-ouest de la Syrie, suscitant à la fois crainte, controverse et attention internationale en raison de son parcours, de ses alliances et de son rôle dans l’évolution du paysage politico-militaire syrien.",
        isExternal: false
    },
    {
        id: 10,
        title: "Coupe du monde U-20 : le Maroc choque l’Argentine et entre dans l’histoire",
        excerpt: "La Coupe du monde U-20 a été le théâtre d’un véritable séisme footballistique.",
        label: "sports",
        readTime: "18 min read",
        timeAgo: "2 hours ago",
        imageUrl: "images/U20.jpeg",
        fullContent: "Contre toute attente, le Maroc a créé la sensation en s’imposant face à l’Argentine, nation emblématique du football mondial. Une victoire historique qui marque un tournant pour les Lionceaux de l’Atlas et inscrit leur nom en lettres d’or dans l’histoire de la compétition.",
        isExternal: false
    }
];

const trendingArticles = [
    "Manifestations en Bulgarie : des milliers de personnes dans les rues",
    "Nouvelles réformes politiques : tensions au sein du gouvernement",
    "Réseaux sociaux : une vidéo virale relance le débat public",
    "Politique : des élections locales sous haute tension",
    "Science : des chercheurs font une avancée majeure sur l’énergie renouvelable",
    "Culture : exposition incontournable au musée national"
];

// Side articles data for next to video
const sideArticlesData = [
    {
        id: 101,
        author: "Maximilian Demon1 Mazanov",
        title: "Demon1's situation in Valorant involves a career rollercoaster",
        readTime: "5 MIN READ",
        imageUrl: "images/demon1-cant-go-to-tokyo-with-eg-vct.avif"
    },
    {
        id: 102,
        author: "CHRISTOPHER CALDWELL",
        title: "Cliffs of Moher: Ireland’s Majestic Coastal Wonder",
        readTime: "6 MIN READ",
        imageUrl: "images/cliffs-of-moher-panorama.jpg"
    },
    {
        id: 103,
        author: "Jay Sinatraa Won",
        title: "From Suspension to Comeback: The Story of Sinatraa in Professional VALORANT",
        readTime: "7 MIN READ",
        imageUrl: null
    },
    {
        id: 104,
        author: "EMILY BAZELON AND DAVID FRENCH",
        title: "Dr Disrespect: The Controversial Ban, Public Backlash",
        readTime: "12 MIN READ",
        imageUrl: null
    },
    {
        id: 105,
        author: "Farouk Nabili",
        title: "The ‘67 Kid’ Phenomenon: How a Viral Meme Took Over the Internet in 2025",
        readTime: "8 MIN READ",
        imageUrl: null
    }
];

// Update date dynamically
function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
}

// Update market indicator with animation
function updateMarketIndicator() {
    const indicator = document.getElementById('market-indicator');
    const change = (Math.random() * 2 - 1).toFixed(2);
    const isUp = change >= 0;
    
    indicator.className = isUp ? 'market-up' : 'market-down';
    indicator.textContent = `${isUp ? '+' : '-'}${change}% ${isUp ? '↑' : '↓'}`;
}

// Render articles
function renderArticles(articles) {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';

    // First add the slider (large feature)
    const sliderElement = createSlider();
    container.appendChild(sliderElement);

    articles.forEach((article, index) => {
        const articleCard = document.createElement('div');
        articleCard.className = `article-card`;
        articleCard.onclick = () => openArticle(article);

        const labelHTML = article.label ? 
            `<span class="article-label label-${article.label}">${article.label.toUpperCase()}</span>` : '';

        articleCard.innerHTML = `
            <div class="article-image">
                <img src="${article.imageUrl}" alt="${article.title}">
            </div>
            <div class="article-content">
                ${labelHTML}
                <h2 class="article-title">${article.title}</h2>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <span>${article.timeAgo}</span>
                    <span>${article.readTime}</span>
                </div>
            </div>
        `;

        container.appendChild(articleCard);

        // Add combined section after 1st article
        if (index === 0) {
            const videoCard = createVideoReel();
            container.appendChild(videoCard);
            
            // Add side articles next to video
            const sideArticles = createSideArticles();
            container.appendChild(sideArticles);
            
            // Add combined section (Climate + Stock + Trending)
            const combinedSection = createCombinedSection();
            container.appendChild(combinedSection);
        }
    });
}

// Create slider for large feature
let currentSlide = 0;
let sliderInterval;

function createSlider() {
    const sliderCard = document.createElement('div');
    sliderCard.className = 'article-card large-feature';
    
    let slidesHTML = '';
    sliderArticles.forEach((article, index) => {
        const labelHTML = article.label ? 
            `<span class="article-label label-${article.label}">${article.label.toUpperCase()}</span>` : '';
        
        slidesHTML += `
            <div class="slide" data-slide="${index}">
                <img src="${article.imageUrl}" alt="${article.title}" class="slide-image">
                <div class="slide-content">
                    ${labelHTML}
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-meta">
                        <span>${article.timeAgo}</span>
                        <span>${article.readTime}</span>
                    </div>
                </div>
            </div>
        `;
    });

    sliderCard.innerHTML = `
        <div class="slider-container" onclick="handleSlideClick(event)">
            <button class="slider-arrow left" onclick="prevSlide(event)">‹</button>
            <button class="slider-arrow right" onclick="nextSlideManual(event)">›</button>
            <div class="slider-wrapper" id="sliderWrapper">
                ${slidesHTML}
            </div>
        </div>
    `;
    
    return sliderCard;
}

function handleSlideClick(event) {
    const article = sliderArticles[currentSlide];
    
    // Don't trigger if clicking on arrows
    if (event.target.classList.contains('slider-arrow') ||
        event.target.closest('.slider-arrow')) {
        return;
    }
    
    if (article.isExternal) {
        // First slide - go to external page
        window.location.href = article.externalUrl;
    } else {
        // Other slides - open modal
        openArticle(article);
    }
}

function prevSlide(event) {
    event.stopPropagation();
    currentSlide = (currentSlide - 1 + sliderArticles.length) % sliderArticles.length;
    updateSlider();
    resetSliderInterval();
}

function nextSlideManual(event) {
    event.stopPropagation();
    currentSlide = (currentSlide + 1) % sliderArticles.length;
    updateSlider();
    resetSliderInterval();
}

function updateSlider() {
    const wrapper = document.getElementById('sliderWrapper');
    if (wrapper) {
        wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderArticles.length;
    updateSlider();
}

function startSlider() {
    sliderInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
}
function resetSliderInterval() {
    clearInterval(sliderInterval);
    startSlider();
}

// Create video reel
function createVideoReel() {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-reel-card';
    videoCard.innerHTML = `
        <div class="video-reel" id="videoContainer" onclick="toggleVideoClick()">
            <video id="mainVideo" loop muted playsinline autoplay>
                <source src="images/Bulgarie.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="play-button" id="centerPlayButton"></div>
            <div class="video-overlay">
                <div class="video-label">INVESTIGATION</div>
                <div class="video-title">How the Tate Brothers Returned to the United States</div>
                <div class="video-description">After years of confinement in Romania, they arrived back home.</div>
            </div>
            <!--<div class="video-controls-bar">
                <button class="video-play-pause-btn" onclick="toggleVideoPlayPause(event)" id="playPauseBtn">
                    <span id="playPauseIcon">⏸</span>
                </button>
            </div>-->
        </div>
        <div class="video-description-box">
            <div class="video-description-text" style="margin-bottom: 12px; line-height: 1.8;">
                This investigation video examines the controversial case of Andrew and Tristan Tate, 
                who were detained in Romania on serious charges. After months of legal battles and high-profile 
                advocacy from political figures, they were released and returned to the United States. 
                The video provides an in-depth look at the timeline of events, the legal proceedings, 
                and the international implications of this case. The report includes exclusive interviews 
                with legal experts, footage from Romania, and analysis of the broader impact on international 
                law enforcement cooperation. This comprehensive investigation reveals how the case became 
                intertwined with political movements and social media influence, raising questions about 
                justice, celebrity, and the power of online platforms in shaping public perception.
            </div>
            <div class="video-credit">Andreea Alexandru/Associated Press</div>
        </div>
    `;
    return videoCard;
}

// Video controls - click anywhere to pause/play
function toggleVideoClick() {
    const video = document.getElementById('mainVideo');
    const container = document.getElementById('videoContainer');
    const playPauseIcon = document.getElementById('playPauseIcon');
    
    if (video && container) {
        if (video.paused) {
            video.play();
            container.classList.remove('paused');
            container.classList.add('playing');
            if (playPauseIcon) playPauseIcon.textContent = '⏸';
        } else {
            video.pause();
            container.classList.remove('playing');
            container.classList.add('paused');
            if (playPauseIcon) playPauseIcon.textContent = '▶';
        }
    }
}

function toggleVideo() {
    toggleVideoClick();
}

function toggleVideoPlayPause(event) {
    event.stopPropagation();
    toggleVideo();
}

// Create side articles next to video
function createSideArticles() {
    const sideArticlesContainer = document.createElement('div');
    sideArticlesContainer.className = 'side-articles';
    
    let articlesHTML = '';
    sideArticlesData.forEach(article => {
        const imageHTML = article.imageUrl ? 
            `<div class="side-article-image"><img src="${article.imageUrl}" alt="${article.title}"></div>` : '';
        
        articlesHTML += `
            <div class="side-article-item" onclick="openSideArticle(${article.id})">
                <div class="side-article-author">${article.author}</div>
                ${imageHTML}
                <h3>${article.title}</h3>
                <div class="read-time">${article.readTime}</div>
            </div>
        `;
    });
    
    sideArticlesContainer.innerHTML = articlesHTML;
    return sideArticlesContainer;
}

// Create combined section (Climate + Stock + Trending)
function createCombinedSection() {
    const section = document.createElement('div');
    section.className = 'combined-section';
    
    let sectionHTML = '';
    
    // Add Climate Summit
    const climate = combinedSectionArticles.find(a => a.type === 'climate');
    if (climate) {
        sectionHTML += `
            <div class="combined-section-item climate-item" onclick="openArticle({
                id: ${climate.id},
                title: '${climate.title}',
                fullContent: '${climate.fullContent}',
                imageUrl: '${climate.imageUrl}',
                timeAgo: '${climate.timeAgo}',
                readTime: '${climate.readTime}',
                label: '${climate.label}'
            })">
                <span class="article-label label-${climate.label}">${climate.label.toUpperCase()}</span>
                <h2>${climate.title}</h2>
                <div class="article-meta">
                    <span>${climate.timeAgo}</span>
                    <span>${climate.readTime}</span>
                </div>
            </div>
        `;
    }
    
    // Add Stock Market with image
    const stock = combinedSectionArticles.find(a => a.type === 'stock');
    if (stock) {
        sectionHTML += `
            <div class="combined-section-item" onclick="openArticle({
                id: ${stock.id},
                title: '${stock.title}',
                fullContent: '${stock.fullContent}',
                imageUrl: '${stock.imageUrl}',
                timeAgo: '${stock.timeAgo}',
                readTime: '${stock.readTime}'
            })">
                <div class="article-image">
                    <img src="${stock.imageUrl}" alt="${stock.title}">
                </div>
                <h2>${stock.title}</h2>
                <p>${stock.excerpt}</p>
                <div class="article-meta">
                    <span>${stock.timeAgo}</span>
                    <span>${stock.readTime}</span>
                </div>
            </div>
        `;
    }
    
    // Add Trending Stories
    sectionHTML += '<div class="combined-section-item" style="cursor: default; padding-bottom: 25px;">';
    sectionHTML += '<h3 style="font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 10px;">Trending Stories</h3>';
    trendingArticles.forEach((article, index) => {
        const isLast = index === trendingArticles.length - 1;
        sectionHTML += `
            <div style="padding: 12px 0; ${isLast ? '' : 'border-bottom: 1px solid #eee;'} cursor: pointer; transition: background 0.2s;" 
                 onmouseover="this.style.background='#f9f9f9'; this.style.paddingLeft='5px'" 
                 onmouseout="this.style.background=''; this.style.paddingLeft=''">
                <span style="font-size: 24px; font-weight: bold; color: #ddd; display: inline-block; width: 40px;">${index + 1}</span>
                <span style="font-size: 14px; line-height: 1.4; display: inline-block; vertical-align: top; width: calc(100% - 50px);">${article}</span>
            </div>
        `;
    });
    sectionHTML += '</div>';
    
    section.innerHTML = sectionHTML;
    return section;
}

// Open article modal
function openArticle(article) {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    
    const labelHTML = article.label ? 
        `<span class="article-label label-${article.label}">${article.label.toUpperCase()}</span>` : '';
    
    modalBody.innerHTML = `
        <div class="article-image" style="height: 400px; margin-bottom: 20px;">
            <img src="${article.imageUrl}" alt="${article.title}">
        </div>
        ${labelHTML}
        <h1 style="font-size: 36px; margin: 20px 0; line-height: 1.2;">${article.title}</h1>
        <div style="color: #999; margin-bottom: 20px; font-size: 14px;">
            ${article.timeAgo} • ${article.readTime}
        </div>
        <div class="modal-article-content">
            <p>${article.fullContent}</p>
            
        </div>
    `;
    
    modal.style.display = 'block';
    // Prevent scrolling on main page while modal is open
    document.body.style.overflow = 'hidden';
}

// Open side article modal
function openSideArticle(articleId) {
    const article = sideArticlesData.find(a => a.id === articleId);
    if (!article) return;

    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    
    const imageHTML = article.imageUrl ? 
        `<div class="article-image" style="height: 400px; margin-bottom: 20px;">
            <img src="${article.imageUrl}" alt="${article.title}">
        </div>` : '';
    
    modalBody.innerHTML = `
        ${imageHTML}
        <div style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; font-weight: 600;">${article.author}</div>
        <h1 style="font-size: 36px; margin: 20px 0; line-height: 1.2;">${article.title}</h1>
        <div style="color: #999; margin-bottom: 20px; font-size: 14px;">
            ${article.readTime}
        </div>
        <div class="modal-article-content">
            
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('article-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
function closeModalOnOutside(e) {
    // Check if the clicked element is the dark overlay 
    if (e.target.id === 'article-modal') {
        closeModal();
    }
}

// Login popup functions (50% height - triggered by Log In button)
function openLoginPopup() {
    const popup = document.getElementById('popup-form');
    popup.classList.add('active');
}

function closeLoginPopup() {
    const popup = document.getElementById('popup-form');
    popup.classList.remove('active');
}

function handlePopupSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('popup-email').value;
    alert('Thank you! Account creation would proceed with: ' + email);
    closeLoginPopup();
    return false;
}

// Subscription popup functions 
function openSubscriptionPopup(event) {
    // "No browser, don't do X. I'll handle this myself!"
    if (event) event.preventDefault();
    const popup = document.getElementById('subscription-form');
    popup.classList.add('active');
}

function closeSubscriptionPopup() {
    const popup = document.getElementById('subscription-form');
    popup.classList.remove('active');
}

// Select subscription plan
function selectPlan(planType) {
    if (planType === 'basic') {
        document.getElementById('plan-basic').checked = true;
    } else if (planType === 'family') {
        document.getElementById('plan-family').checked = true;
    }
}

// Newsletter subscription
function handleSubscribe(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email && email.includes('@')) {
        alert('Thank you for subscribing! You will receive our daily newsletter at ' + email);
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
    return false;
}

// Initialize page
function initializePage() {
    updateDate();
    renderArticles(articlesData);
    
    // Start slider auto-play
    startSlider();
    
    // Update market indicator every 10 seconds
    setInterval(updateMarketIndicator, 10000);
    
    // Set up video event listener after render
}

// Start when page loads
window.addEventListener('load', initializePage);