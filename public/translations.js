const translations = {
    ar: {
        // App Title and Headers
        appTitle: 'حلويات أوامر النقل',
        connectToZoho: 'الاتصال بـ Zoho',
        syncData: 'مزامنة البيانات',
        connected: 'متصل',

        // Loading States
        connectingToZoho: 'جاري الاتصال بـ Zoho...',
        pleaseWaitConnection: 'يرجى الانتظار بينما نقوم بإنشاء الاتصال',
        connectedToZoho: '✅ تم الاتصال بـ Zoho',
        syncingItemsWarehouses: 'جاري مزامنة العناصر والمخازن...',
        creatingTransferOrder: '🔄 جاري إنشاء أمر النقل',
        processingTransferOrder: 'جاري معالجة أمر النقل الخاص بك...',
        generatingPDF: '📄 جاري إنشاء PDF',
        creatingDocument: 'جاري إنشاء وثيقة أمر النقل...',
        downloadingFile: '⬇️ جاري تنزيل الملف',
        downloadingPDF: 'جاري تنزيل ملف PDF لأمر النقل...',

        // Progress
        items: 'العناصر:',
        warehouses: 'المخازن:',

        // Sync Status
        itemsSynced: 'العناصر المُزامنة:',
        warehousesLoaded: 'المخازن المُحمّلة:',

        // Warehouse Selection
        fromWarehouse: 'من المخزن:',
        toWarehouse: 'إلى المخزن:',
        selectWarehouse: 'اختر المخزن...',

        // Search
        searchPlaceholder: 'ابحث عن المنتجات بالاسم أو رمز SKU...',
        search: 'بحث',
        noProductsFound: 'لم يتم العثور على منتجات',
        noProductsAvailable: 'لا توجد منتجات متاحة',

        // Cart/Transfer Order
        transferOrderItems: 'عناصر أمر النقل',
        createTransferOrder: 'إنشاء أمر النقل',
        noItemsInTransferOrder: 'لا توجد عناصر في أمر النقل',

        // Quantity Popup
        pieces: 'القطع',
        cartons: 'الكراتين',
        totalTransfer: 'إجمالي النقل',
        cancel: 'إلغاء',
        addToCart: 'إضافة للسلة',
        close: 'إغلاق',
        pcsPerUnit: 'قطعة لكل {{unit}}',
        noConversionAvailable: 'التحويل غير متاح',
        units: 'وحدات',
        piecesTotal: 'إجمالي القطع',

        // Cart Item Display
        total: 'المجموع:',
        remove: 'إزالة',

        // Alerts and Messages
        authenticationFailed: 'فشلت المصادقة. يرجى المحاولة مرة أخرى.',
        failedToLoadItems: 'فشل تحميل العناصر',
        failedToLoadWarehouses: 'فشل تحميل المخازن',
        checkAuthentication: 'يرجى التحقق من المصادقة الخاصة بك.',
        autoConnectingToZoho: 'جاري الاتصال التلقائي بـ Zoho...',
        pleaseEnterValidQuantity: 'يرجى إدخال كمية صالحة في حقل واحد على الأقل',
        pleaseSelectBothWarehouses: 'يرجى اختيار كل من المخزن المصدر والمخزن الوجهة',
        warehousesMustBeDifferent: 'يجب أن يكون المخزن المصدر والوجهة مختلفين',
        pleaseAddItemsToTransferOrder: 'يرجى إضافة عناصر إلى أمر النقل',
        invalidResponseFromServer: 'خطأ: استجابة غير صالحة من الخادم',
        transferOrderCreatedButPDFFailed: 'تم إنشاء أمر النقل ولكن فشل تنزيل PDF',
        errorCreatingTransferOrder: 'خطأ في إنشاء أمر النقل',

        // Language Switcher
        language: 'اللغة',
        arabic: 'العربية',
        english: 'English',

        // PDF Descriptions
        mixedQuantity: 'كمية مختلطة',
        original: 'الأصل',
        convertedTo: 'محول إلى',
        equivalent: 'مكافئ',

        // Product Details
        sku: 'رمز SKU',
        unit: 'الوحدة',
        qty: 'الكمية',

        // Container Names
        carton: 'كرتونة',
        cartons: 'كرتونة',
        bag: 'كيس',
        bags: 'كيس',
        tin: 'علبة',
        tins: 'علبة',
        dozen: 'دستة',
        dozens: 'دستة',
        outer: 'صندوق خارجي',
        outers: 'صندوق خارجي',
        unit: 'وحدة',
        units: 'وحدة',
        oneCarton: 'كرتونة واحدة',
        oneBag: 'كيس واحد',
        oneTin: 'علبة واحدة',
        oneDozen: 'دستة واحدة',
        oneOuter: 'صندوق خارجي واحد',
        oneUnit: 'وحدة واحدة'
    },

    en: {
        // App Title and Headers
        appTitle: 'Transfer Order Sweets',
        connectToZoho: 'Connect to Zoho',
        syncData: 'Sync Data',
        connected: 'Connected',

        // Loading States
        connectingToZoho: 'Connecting to Zoho...',
        pleaseWaitConnection: 'Please wait while we establish connection',
        connectedToZoho: '✅ Connected to Zoho',
        syncingItemsWarehouses: 'Syncing items and warehouses...',
        creatingTransferOrder: '🔄 Creating Transfer Order',
        processingTransferOrder: 'Processing your transfer order...',
        generatingPDF: '📄 Generating PDF',
        creatingDocument: 'Creating transfer order document...',
        downloadingFile: '⬇️ Downloading File',
        downloadingPDF: 'Downloading transfer order PDF...',

        // Progress
        items: 'Items:',
        warehouses: 'Warehouses:',

        // Sync Status
        itemsSynced: 'Items synced:',
        warehousesLoaded: 'Warehouses loaded:',

        // Warehouse Selection
        fromWarehouse: 'From Warehouse:',
        toWarehouse: 'To Warehouse:',
        selectWarehouse: 'Select warehouse...',

        // Search
        searchPlaceholder: 'Search products by name or SKU...',
        search: 'Search',
        noProductsFound: 'No products found',
        noProductsAvailable: 'No products available',

        // Cart/Transfer Order
        transferOrderItems: 'Transfer Order Items',
        createTransferOrder: 'Create Transfer Order',
        noItemsInTransferOrder: 'No items in transfer order',

        // Quantity Popup
        pieces: 'Pieces',
        cartons: 'Cartons',
        totalTransfer: 'Total Transfer',
        cancel: 'Cancel',
        addToCart: 'Add to Cart',
        close: 'Close',
        pcsPerUnit: 'pcs per {{unit}}',
        noConversionAvailable: 'no conversion available',
        units: 'units',
        piecesTotal: 'pieces total',

        // Cart Item Display
        total: 'Total:',
        remove: 'Remove',

        // Alerts and Messages
        authenticationFailed: 'Authentication failed. Please try again.',
        failedToLoadItems: 'Failed to load items',
        failedToLoadWarehouses: 'Failed to load warehouses',
        checkAuthentication: 'Please check your authentication.',
        autoConnectingToZoho: 'Auto-connecting to Zoho...',
        pleaseEnterValidQuantity: 'Please enter a valid quantity in at least one field',
        pleaseSelectBothWarehouses: 'Please select both from and to warehouses',
        warehousesMustBeDifferent: 'From and To warehouses must be different',
        pleaseAddItemsToTransferOrder: 'Please add items to the transfer order',
        invalidResponseFromServer: 'Error: Invalid response from server',
        transferOrderCreatedButPDFFailed: 'Transfer order created but PDF download failed',
        errorCreatingTransferOrder: 'Error creating transfer order',

        // Language Switcher
        language: 'Language',
        arabic: 'العربية',
        english: 'English',

        // PDF Descriptions
        mixedQuantity: 'Mixed quantity',
        original: 'Original',
        convertedTo: 'converted to',
        equivalent: 'equivalent',

        // Product Details
        sku: 'SKU',
        unit: 'Unit',
        qty: 'qty',

        // Container Names
        carton: 'carton',
        cartons: 'cartons',
        bag: 'bag',
        bags: 'bags',
        tin: 'tin',
        tins: 'tins',
        dozen: 'dozen',
        dozens: 'dozens',
        outer: 'outer',
        outers: 'outers',
        unit: 'unit',
        units: 'units',
        oneCarton: '1 Carton',
        oneBag: '1 Bag',
        oneTin: '1 Tin',
        oneDozen: '1 Dozen',
        oneOuter: '1 Outer',
        oneUnit: '1 Unit'
    }
};

// Language management
let currentLanguage = localStorage.getItem('appLanguage') || 'ar'; // Arabic as default

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('appLanguage', lang);

    // Update HTML lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all translated elements
    updateTranslations();

    // Update CSS for RTL/LTR specific styles
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang === 'en');
}

function t(key, replacements = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key] || key;

    // Replace placeholders like {{unit}}
    Object.keys(replacements).forEach(placeholder => {
        text = text.replace(new RegExp(`{{${placeholder}}}`, 'g'), replacements[placeholder]);
    });

    return text;
}

function updateTranslations() {
    // Update static HTML elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });

    // Update dynamic elements that might exist
    updateDynamicTranslations();

    // Refresh search results to update unit badges
    if (typeof searchProducts === 'function') {
        const searchInput = document.getElementById('search-input');
        if (searchInput && searchInput.value.trim()) {
            searchProducts();
        } else if (typeof showInitialProducts === 'function') {
            showInitialProducts();
        }
    }
}

function updateDynamicTranslations() {
    // Update any dynamically created content
    const statusText = document.getElementById('status-text');
    if (statusText && statusText.textContent === 'Connected') {
        statusText.textContent = t('connected');
    }

    // Update cart if it's empty
    const cartItems = document.getElementById('cart-items');
    if (cartItems && cartItems.querySelector('.empty-state')) {
        cartItems.innerHTML = `<div class="empty-state">${t('noItemsInTransferOrder')}</div>`;
    }

    // Update search results if empty
    const searchResults = document.getElementById('search-results');
    if (searchResults && searchResults.querySelector('.empty-state')) {
        const emptyText = searchResults.textContent.includes('found')
            ? t('noProductsFound')
            : t('noProductsAvailable');
        searchResults.innerHTML = `<div class="empty-state">${emptyText}</div>`;
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);

    // Update language selector value
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }
});