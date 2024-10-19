const validUser = { username: "admin", password: "password" }; // مثال لمستخدم صالح

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUser.username && password === validUser.password) {
        // تخزين حالة تسجيل الدخول
        localStorage.setItem('loggedIn', true);
        window.location.href = 'dashboard.html'; // الانتقال إلى الصفحة الرئيسية
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});

// التحقق من تسجيل الدخول
if (window.location.pathname === '/dashboard.html' && !localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html'; // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن مسجلاً دخوله
}
