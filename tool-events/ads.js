(() => {
    "use strict";

    /* Yahan aap 100 ya jitne marzi chahay URLs add kar sakte hain */
    const adsList = [
        {
            url: "https://ah4454476.github.io/parkinsons/",
            title: "Parkinsons Info Website",
            desc: "Click here to learn more about Parkinsons and health details.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Nra9BWFbr_BjL8FBsnZ1m1D1wM1jUT7MDC2x6iWyZQ&s=10"
        },
        {
            url: "https://ah4454476.github.io/usd/",
            title: "Prop US Money",
            desc: "Buy US Prop money for fun and videos.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyH--VLdIvzsFQXGZhQu0BXRRbRQylrWzcT8jzah9Ng&s=10"
        },
        {
            url: "https://www.youtube.com/",
            title: "Watch Videos on YouTube",
            desc: "Explore trending videos, music, and more online.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PmtHx9iq1eo1Gu7zSL2pR7rYpTl6uu0STdXfG3vYPQ&s=10"
        },
        {
            url: "https://www.amazon.com/",
            title: "Amazon",
            desc: "Best Online Shopping",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3V6nCvdgnPDDB1daMFutUUyaGUhegEuqME7tFl0cz4Q&s=10"
        }
        /* Mazeed URLs yahan aage add karte jayein... */
    ];

    /* Styling */
    const style = document.createElement("style");
    style.textContent = `
        .adsense-banner-wrapper {
            width: 100%;
            max-width: 1000px;
            margin: 20px auto;
            padding: 15px;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            text-align: center;
        }

        .adsense-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #94a3b8;
            margin-bottom: 8px;
            text-align: right;
            display: block;
        }

        .adsense-scroll-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }

        .adsense-card {
            flex: 1 1 280px;
            max-width: 320px;
            min-width: 250px;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 6px;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
            transition: box-shadow 0.2s ease;
        }

        .adsense-card:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .adsense-card a {
            display: block;
            color: inherit;
            text-decoration: none;
            width: 100%;
            height: 100%;
        }

        .adsense-card img {
            width: 100%;
            height: 140px;
            object-fit: cover;
            border-bottom: 1px solid #e2e8f0;
        }

        .adsense-content {
            padding: 14px;
        }

        .adsense-title {
            display: block;
            font-size: 15px;
            font-weight: 700;
            color: #1d4ed8;
            margin-bottom: 6px;
            text-decoration: underline;
        }

        .adsense-desc {
            font-size: 12px;
            color: #475569;
            line-height: 1.4;
        }

        @media (max-width: 480px) {
            .adsense-banner-wrapper {
                margin: 10px 5px;
                width: auto;
                padding: 10px;
            }
        }
    `;
    document.head.appendChild(style);

    if (window.__adsInitialized) return;
    window.__adsInitialized = true;

    function shuffleArray(array) {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function renderAds() {
        const targetContainer = document.getElementById("ads-banner-container");
        if (!targetContainer) return;

        const wrapper = document.createElement("div");
        wrapper.className = "adsense-banner-wrapper";

        const label = document.createElement("span");
        label.className = "adsense-label";
        label.textContent = "Ads";
        wrapper.appendChild(label);

        const scrollContainer = document.createElement("div");
        scrollContainer.className = "adsense-scroll-container";

        /* Pehle array ko shuffle karein, phir sirf pehle 3 ads select karein */
        const randomizedAds = shuffleArray(adsList).slice(0, 3);

        randomizedAds.forEach(item => {
            const card = document.createElement("div");
            card.className = "adsense-card";

            const link = document.createElement("a");
            link.href = item.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            if (item.image && item.image.trim() !== "") {
                const img = document.createElement("img");
                img.src = item.image;
                img.alt = item.title;
                img.loading = "lazy";
                link.appendChild(img);
            }

            const content = document.createElement("div");
            content.className = "adsense-content";

            const title = document.createElement("span");
            title.className = "adsense-title";
            title.textContent = item.title;

            const desc = document.createElement("div");
            desc.className = "adsense-desc";
            desc.textContent = item.desc;

            content.append(title, desc);
            link.appendChild(content);
            card.appendChild(link);
            scrollContainer.appendChild(card);
        });

        wrapper.appendChild(scrollContainer);
        targetContainer.innerHTML = "";
        targetContainer.appendChild(wrapper);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderAds);
    } else {
        renderAds();
    }
})();
