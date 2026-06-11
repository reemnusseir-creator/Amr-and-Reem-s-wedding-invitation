<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دعوة زفاف عمرو وريم</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&family=Tajawal:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #f7f5f0; /* بيج هادي ورايق */
            --text-color: #4a4a4a; /* رمادي داكن شيك جداً */
            --accent-color: #8c7853; /* لمسة خشبية دافية تليق على الجاردن */
            --card-bg: #ffffff;
        }
        body {
            font-family: 'Tajawal', 'Cairo', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .header-section {
            padding: 60px 20px;
            background: linear-gradient(rgba(247,245,240,0.85), rgba(247,245,240,0.95)), url('Chapter4.jpg') no-repeat center/cover;
            border-bottom: 3px double var(--accent-color);
        }
        h1 { font-size: 2.5rem; color: var(--accent-color); margin-bottom: 10px; }
        .date { font-size: 1.2rem; letter-spacing: 1px; margin-bottom: 30px; }
        
        /* مشغل الموسيقى الشيك */
        .music-player {
            background: var(--card-bg);
            max-width: 320px;
            margin: -20px auto 40px;
            padding: 15px;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            border: 1px solid #e6e2da;
        }
        .music-player p { margin: 0 0 10px 0; font-size: 0.9rem; color: var(--accent-color); font-weight: bold; }
        audio { width: 100%; }

        /* العداد التنازلي */
        .countdown-container {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 30px auto;
            max-width: 400px;
        }
        .time-box {
            background: var(--card-bg);
            padding: 15px;
            border-radius: 10px;
            flex: 1;
            box-shadow: 0 2px 10px rgba(0,0,0,0.03);
            border: 1px solid #e6e2da;
        }
        .time-box span { display: block; font-size: 1.8rem; font-weight: bold; color: var(--accent-color); }
        .time-box label { font-size: 0.8rem; color: #888; }

        /* القصص والصور المترتبة */
        .story-section { padding: 40px 20px; max-width: 600px; margin: 0 auto; }
        .chapter-card {
            background: var(--card-bg);
            border-radius: 15px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            border: 1px solid #e6e2da;
        }
        .chapter-card img { width: 100%; height: 280px; object-fit: cover; display: block; }
        .chapter-content { padding: 20px; text-align: right; }
        .chapter-content h3 { color: var(--accent-color); margin-top: 0; }

        /* تفاصيل الفرح */
        .details-box {
            background: #eae6df;
            padding: 30px 20px;
            margin: 40px 20px;
            border-radius: 15px;
            border: 1px dashed var(--accent-color);
        }

        /* تأكيد الحضور */
        .rsvp-section { background: var(--card-bg); padding: 40px 20px; border-top: 1px solid #e6e2da; }
        .btn {
            background-color: var(--accent-color);
            color: white;
            border: none;
            padding: 12px 35px;
            font-size: 1.1rem;
            border-radius: 25px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            margin-top: 15px;
            font-family: 'Tajawal', sans-serif;
        }
    </style>
</head>
<body>

    <div class="header-section">
        <h1>عمرو & ريم</h1>
        <p style="color: #888; font-size: 1.1rem;">يسعدنا دعوتكم لمشاركتنا فرحتنا</p>
        <div class="date">25 يوليو 2026</div>
    </div>

    <div class="music-player">
        <p>🎵 الموسيقى الخلفية</p>
        <audio autoplay loop controls id="bgMusic">
            <source src="Swany.mp3" type="audio/mpeg">
            متصفحك لا يدعم تشغيل الصوت.
        </audio>
    </div>

    <h2 style="color: var(--accent-color);">العد التنازلي لليوم المنتظر 🤍</h2>
    <div class="countdown-container">
        <div class="time-box"><span id="days">00</span><label>أيام</label></div>
        <div class="time-box"><span id="hours">00</span><label>ساعات</label></div>
        <div class="time-box"><span id="minutes">00</span><label>دقائق</label></div>
    </div>

    <div class="story-section">
        <h2 style="color: var(--accent-color); margin-bottom: 30px;">حكايتنا ✨</h2>
        
        <div class="chapter-card">
            <img src="Chapter1.jpg" alt="Chapter 1">
            <div class="chapter-content">
                <h3>الفصل الأول: البداية</h3>
                <p>تفاصيل القصة الأولى والترتيبات الجميلة...</p>
            </div>
        </div>

        <div class="chapter-card">
            <img src="Chapter2.jpg" alt="Chapter 2">
            <div class="chapter-content">
                <h3>الفصل الثاني: التفاصيل</h3>
                <p>حكاية التخطيط والخطوات اللي مشيناها سوا...</p>
            </div>
        </div>

        <div class="chapter-card">
            <img src="Chapter3.jpg" alt="Chapter 3">
            <div class="chapter-content">
                <h3>الفصل الثالث: يوم الخطوبة</h3>
                <p>ذكريات اليوم اللي جمعنا وبداية الحلم الكبير...</p>
            </div>
        </div>

        <div class="chapter-card">
            <img src="Chapter4.jpg" alt="Chapter 4">
            <div class="chapter-content">
                <h3>الفصل الرابع: فرحتنا الكبيرة</h3>
                <p>تجهيز مكاننا وفرحتنا الكبيرة اللي بتكمل بيكم في الفيلا...</p>
            </div>
        </div>
    </div>

    <div class="details-box">
        <h3>تفاصيل حفل الزفاف</h3>
        <p>📍 <strong>المكان:</strong> Villa Bashari, Giza</p>
        <p>⏰ <strong>الوقت:</strong> الساعة 6:00 مساءً</p>
    </div>

    <div class="rsvp-section">
        <h3>هل ستشاركونا الفرحة؟</h3>
        <p>نرجو تأكيد حضوركم عبر الرابط التالي:</p>
        <a href="https://forms.google.com" target="_blank" class="btn">تأكيد الحضور (RSVP)</a>
    </div>

    <p style="margin: 40px 0; color: #aaa; font-size: 0.8rem;">صنع بحب لـ عمرو & ريم 🤍</p>

    <script {
        const weddingDate = new Date("July 25, 2026 18:00:00").getTime();
        
        setInterval(function() {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
        }, 1000);

        window.addEventListener('click', () => {
            const audio = document.getElementById('bgMusic');
            audio.play().catch(e => console.log("Autoplay blocked"));
        }, { once: true });
    </script>
</body>
</html>
