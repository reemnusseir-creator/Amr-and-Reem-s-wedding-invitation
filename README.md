<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>Wedding Invitation | R&A</title>
    <style>
        body { margin: 0; background: #0c2415; color: #d4af37; font-family: 'Times New Roman', serif; overflow: hidden; }
        
        /* الظرف اللي بيفتح */
        #envelope-area {
            position: fixed; inset: 0; z-index: 100;
            display: flex; justify-content: center; align-items: center;
            background: #0f2e1a; transition: 1.5s;
        }
        .envelope {
            width: 300px; height: 200px; background: #1a4a2b; border: 2px solid #c5a059;
            cursor: pointer; position: relative; transition: 1s;
        }
        .flap {
            position: absolute; top: 0; left: 0; width: 100%; height: 50%;
            background: #153b23; clip-path: polygon(0 0, 100% 0, 50% 100%);
            transition: 1s; transform-origin: top;
        }
        .open .flap { transform: rotateX(180deg); }
        .open { transform: scale(1.2); opacity: 0; pointer-events: none; }

        /* الدعوة والورد */
        #content { opacity: 0; transition: 2s; text-align: center; padding: 50px; }
        .petal { position: absolute; background: #c5a059; border-radius: 100% 0; opacity: 0.6; animation: fall linear infinite; }
        @keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }
    </style>
</head>
<body>

    <audio id="music" src="Swany.mp3"></audio>

    <div id="envelope-area" onclick="openInvitation()">
        <div class="envelope">
            <div class="flap"></div>
            <div style="text-align: center; margin-top: 80px; font-size: 30px;">R & A</div>
        </div>
    </div>

    <div id="content">
        <h1>Wedding of Reem & Amr</h1>
        <p>25 July 2026</p>
        <div style="display: flex; justify-content: center; gap: 20px;">
            <img src="1781194288956.jpeg" style="width: 200px; border: 2px solid #c5a059;">
            <img src="1781194320400.jpeg" style="width: 200px; border: 2px solid #c5a059;">
        </div>
        <br>
        <a href="https://maps.app.goo.gl/qVDhujncTiB6yjYX6?g_st=ac" style="color: #c5a059; font-size: 20px;">اضغطي هنا للوكيشن</a>
    </div>

    <script>
        function openInvitation() {
            document.getElementById('envelope-area').classList.add('open');
            document.getElementById('content').style.opacity = '1';
            document.getElementById('music').play();
            // بدء الورد
            for(let i=0; i<30; i++) {
                let p = document.createElement('div');
                p.className = 'petal';
                p.style.left = Math.random()*100 + 'vw';
                p.style.width = p.style.height = Math.random()*15 + 10 + 'px';
                p.style.animationDuration = Math.random()*3 + 3 + 's';
                document.body.appendChild(p);
            }
        }
    </script>
</body>
</html>
