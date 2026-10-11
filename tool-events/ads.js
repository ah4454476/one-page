(() => {
    "use strict";

    /* Yahan aap 100 ya jitne marzi chahay URLs add kar sakte hain */
    const adsList = [
        {
            url: "https://ah4454476.github.io/parkinsons/",
            title: "Parkinsons Info Website",
            desc: "Click here to learn more about Parkinsons and health details.",
            image: "https://blogger.googleusercontent.com/img/a/AVvXsEhH9XuUCsjTmxVzgwJPbKWFlEDQMyTFzSI78j5HF9T2_y9jsaUcSsWQSpdNOWL5_4kHfcQlFTYYZb6_YSn_DKF0IQRpODMI7c1ZMR_Pr7tcanJodNzOWlOHzBS7TxFOzcuf3Ergrd2Ph4TtzC7_uLhLieG5BXpMws8xaebT1aRWZoNmPuVUk9bmifNch2w"
        },
        {
            url: "https://ah4454476.github.io/usd/",
            title: "USD Rate Tracker",
            desc: "Check out the latest updates and details on USD rates.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo75lu3mN3hiY3muL_wICX5qPQQuDLIjxC8gqGHYJuZA&s=10"
        },
        {
            url: "https://www.youtube.com/",
            title: "Watch Videos on YouTube",
            desc: "Explore trending videos, music, and more online.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJH3_ZQvwa5B3NQSWzlxJPW_nlS0eTQtv74M7FtxNAQ&s=10"
        },
        {
            url: "https://www.amazon.com/",
            title: "Buy What You Want",
            desc: "Explore online shopping, products, and more.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EY-lND57214mCtVG1cSBew0tV54Z_S10MRhgiDFdKA&s=10"
        }
        /* Mazeed URLs yahan aage add karte jayein... */
    ];

    /* Styling: Bina scroll ke 3 ads ek hi line mein fit karne ke liye */
    const style = document.createElement("style");
    style.textContent = `
        .adsense-banner-wrapper {
            width: 100%;
            max-width: 1000px;
            margin: 20px auto;
            padding: 10px;
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
            margin-bottom: 6px;
            text-align: right;
            display: block;
        }

        .adsense-scroll-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 6px;
            overflow-x: hidden;
            width: 100%;
            box-sizing: border-box;
        }

        .adsense-card {
            flex: 1 1 0;
            min-width: 0;
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
            height: 90px;
            object-fit: cover;
            border-bottom: 1px solid #e2e8f0;
        }

        .adsense-content {
            padding: 8px;
        }

        .adsense-title {
            display: block;
            font-size: 12px;
            font-weight: 700;
            color: #1d4ed8;
            margin-bottom: 3px;
            text-decoration: underline;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .adsense-desc {
            font-size: 10px;
            color: #475569;
            line-height: 1.2;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        @media (max-width: 480px) {
            .adsense-banner-wrapper {
                margin: 10px 2px;
                padding: 6px;
            }
            .adsense-content {
                padding: 6px;
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

        /* Array shuffle karke sirf pehle 3 random ads select honge */
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
