// دالة لإضافة قيمة معينة (مثل رقم أو رمز عملية حسابية) إلى حقل الإدخال
function appendToDisplay(value) {
    // البحث عن عنصر الإدخال الذي يحمل المعرف 'screen' وإضافة القيمة له
    document.getElementById('screen').value += value // إضافة القيمة إلى النص الحالي
}

// دالة لمسح كل المحتوى الموجود في حقل الإدخال
function clearAll() {
    // تعيين قيمة حقل الإدخال إلى سلسلة فارغة لمسح كل النص
    document.getElementById('screen').value = "" // مسح المحتوى
}

// دالة لحذف آخر حرف أو رقم موجود في حقل الإدخال
function deleteLast() {
    // البحث عن عنصر الإدخال الذي يحمل المعرف 'screen'
    let screen = document.getElementById("screen")
    // تحديث قيمة الحقل بحذف آخر حرف عن طريق استخدام slice
    screen.value = screen.value.slice(0, -1) // حذف آخر حرف من النص
}

// دالة لحساب النتيجة بناءً على العمليات المدخلة في حقل الإدخال
function calc() {
    // الحصول على النص الموجود في حقل الإدخال
    let screen = document.getElementById("screen").value
    try {
        // محاولة حساب القيمة باستخدام eval وإسناد النتيجة إلى حقل الإدخال
        document.getElementById("screen").value = eval(screen) // تنفيذ التعبير الحسابي
    } catch (error) {
        // في حالة حدوث خطأ (مثل إدخال غير صحيح)، تعيين قيمة حقل الإدخال إلى "Error"
        document.getElementById("screen").value = "Error" // عرض رسالة خطأ
    }
}
