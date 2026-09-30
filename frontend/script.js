const API_URL = "";

/* =====================================================
   TRANSLATIONS
===================================================== */

const translations = {

    /* ================= ENGLISH ================= */

    en: {

        home: "Home",
        books: "Books",
        login: "Login",
        register: "Register",
        myBooks: "My Borrowed Books",
        logout: "Logout",

        welcome: "Welcome to BookNest",

        tagline:
            "Explore, search and manage books easily using our Digital Library",

        explore: "Explore Books",
        search: "Search",
        addBook: "Add New Book",
        availableBooks: "Available Books",

        title: "Book Title",
        author: "Author",
        category: "Category",
        isbn: "ISBN",
        description: "Description",

        titleLabel: "Book Title",
        authorLabel: "Author",
        categoryLabel: "Category",
        isbnLabel: "ISBN",
        descriptionLabel: "Description",
        statusLabel: "Status",

        addBookButton: "Add Book",
        borrowBook: "Borrow Book",
        returnBook: "Return Book",
        notAvailable: "Not Available",
        bookReturned: "Book Returned",

        allCategories: "All Categories",
        programming: "Programming",
        database: "Database",
        science: "Science",
        technology: "Technology",

        name: "Full Name",
        email: "Email",
        password: "Password",

        registerSuccessful:
            "Registration successful! Please login.",

        registerFailed:
            "Registration failed.",

        loading: "Loading...",
        loadingBooks: "Loading books...",
        noBooks: "No books found.",

        noBorrowedBooks:
            "You have not borrowed any books.",

        pleaseLogin:
            "Please login first.",

        enterEmailPassword:
            "Please enter email and password.",

        enterRegisterDetails:
            "Please enter name, email and password.",

        enterBookDetails:
            "Please enter title, author and category.",

        loginSuccessful:
            "Login successful!",

        loginFailed:
            "Login failed.",

        bookAdded:
            "Book added successfully!",

        addBookFailed:
            "Failed to add book.",

        bookBorrowed:
            "Book borrowed successfully!",

        borrowFailed:
            "Unable to borrow book.",

        bookReturnedSuccessfully:
            "Book returned successfully!",

        returnFailed:
            "Failed to return book.",

        cannotConnect:
            "Cannot connect to backend.",

        failedLoadBooks:
            "Failed to load books.",

        failedSearch:
            "Failed to search books.",

        available: "Available",
        issued: "Issued",
        borrowed: "Borrowed",

        loggedOut:
            "Logged out successfully!"
    },


    /* ================= TAMIL ================= */

    ta: {

        home: "முகப்பு",
        books: "புத்தகங்கள்",
        login: "உள்நுழைவு",
        register: "பதிவு செய்யவும்",
        myBooks: "நான் கடன் பெற்ற புத்தகங்கள்",
        logout: "வெளியேறு",

        welcome:
            "BookNest-க்கு வரவேற்கிறோம்",

        tagline:
            "எங்கள் டிஜிட்டல் நூலகத்தில் புத்தகங்களை எளிதாக தேடி நிர்வகிக்கலாம்",

        explore:
            "புத்தகங்களை ஆராயுங்கள்",

        search: "தேடல்",

        addBook:
            "புதிய புத்தகத்தைச் சேர்க்கவும்",

        availableBooks:
            "கிடைக்கும் புத்தகங்கள்",

        title:
            "புத்தகத்தின் தலைப்பு",

        author:
            "ஆசிரியர்",

        category:
            "வகை",

        isbn:
            "ISBN",

        description:
            "விளக்கம்",

        titleLabel:
            "புத்தகத்தின் தலைப்பு",

        authorLabel:
            "ஆசிரியர்",

        categoryLabel:
            "வகை",

        isbnLabel:
            "ISBN",

        descriptionLabel:
            "விளக்கம்",

        statusLabel:
            "நிலை",

        addBookButton:
            "புத்தகத்தைச் சேர்க்கவும்",

        borrowBook:
            "புத்தகத்தைப் பெறுக",

        returnBook:
            "புத்தகத்தைத் திருப்பி அளிக்கவும்",

        notAvailable:
            "கிடைக்கவில்லை",

        bookReturned:
            "புத்தகம் திருப்பி அளிக்கப்பட்டது",

        allCategories:
            "அனைத்து வகைகளும்",

        programming:
            "நிரலாக்கம்",

        database:
            "தரவுத்தளம்",

        science:
            "அறிவியல்",

        technology:
            "தொழில்நுட்பம்",

        name:
            "முழு பெயர்",

        email:
            "மின்னஞ்சல்",

        password:
            "கடவுச்சொல்",

        registerSuccessful:
            "பதிவு வெற்றிகரமாக முடிந்தது! இப்போது உள்நுழையவும்.",

        registerFailed:
            "பதிவு செய்ய முடியவில்லை.",

        loading:
            "ஏற்றுகிறது...",

        loadingBooks:
            "புத்தகங்களை ஏற்றுகிறது...",

        noBooks:
            "புத்தகங்கள் எதுவும் கிடைக்கவில்லை.",

        noBorrowedBooks:
            "நீங்கள் எந்த புத்தகத்தையும் கடன் பெறவில்லை.",

        pleaseLogin:
            "முதலில் உள்நுழையவும்.",

        enterEmailPassword:
            "மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",

        enterRegisterDetails:
            "பெயர், மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்.",

        enterBookDetails:
            "தலைப்பு, ஆசிரியர் மற்றும் வகையை உள்ளிடவும்.",

        loginSuccessful:
            "வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!",

        loginFailed:
            "உள்நுழைவு தோல்வியடைந்தது.",

        bookAdded:
            "புத்தகம் வெற்றிகரமாக சேர்க்கப்பட்டது!",

        addBookFailed:
            "புத்தகத்தை சேர்க்க முடியவில்லை.",

        bookBorrowed:
            "புத்தகம் வெற்றிகரமாக பெறப்பட்டது!",

        borrowFailed:
            "புத்தகத்தைப் பெற முடியவில்லை.",

        bookReturnedSuccessfully:
            "புத்தகம் வெற்றிகரமாக திருப்பி அளிக்கப்பட்டது!",

        returnFailed:
            "புத்தகத்தை திருப்பி அளிக்க முடியவில்லை.",

        cannotConnect:
            "Backend-ஐ இணைக்க முடியவில்லை.",

        failedLoadBooks:
            "புத்தகங்களை ஏற்ற முடியவில்லை.",

        failedSearch:
            "புத்தகங்களைத் தேட முடியவில்லை.",

        available:
            "கிடைக்கிறது",

        issued:
            "வழங்கப்பட்டது",

        borrowed:
            "கடன் பெற்றது",

        loggedOut:
            "வெற்றிகரமாக வெளியேறிவிட்டீர்கள்!"
    },


    /* ================= HINDI ================= */

    hi: {

        home: "होम",
        books: "किताबें",
        login: "लॉगिन",
        register: "रजिस्टर",
        myBooks: "मेरी उधार ली गई किताबें",
        logout: "लॉगआउट",

        welcome:
            "BookNest में आपका स्वागत है",

        tagline:
            "हमारी डिजिटल लाइब्रेरी में किताबें आसानी से खोजें और प्रबंधित करें",

        explore:
            "किताबें देखें",

        search:
            "खोजें",

        addBook:
            "नई किताब जोड़ें",

        availableBooks:
            "उपलब्ध किताबें",

        title:
            "किताब का नाम",

        author:
            "लेखक",

        category:
            "श्रेणी",

        isbn:
            "ISBN",

        description:
            "विवरण",

        titleLabel:
            "किताब का नाम",

        authorLabel:
            "लेखक",

        categoryLabel:
            "श्रेणी",

        isbnLabel:
            "ISBN",

        descriptionLabel:
            "विवरण",

        statusLabel:
            "स्थिति",

        addBookButton:
            "किताब जोड़ें",

        borrowBook:
            "किताब लें",

        returnBook:
            "किताब वापस करें",

        notAvailable:
            "उपलब्ध नहीं",

        bookReturned:
            "किताब वापस कर दी गई",

        allCategories:
            "सभी श्रेणियां",

        programming:
            "प्रोग्रामिंग",

        database:
            "डेटाबेस",

        science:
            "विज्ञान",

        technology:
            "प्रौद्योगिकी",

        name:
            "पूरा नाम",

        email:
            "ईमेल",

        password:
            "पासवर्ड",

        registerSuccessful:
            "रजिस्ट्रेशन सफल हुआ! कृपया लॉगिन करें।",

        registerFailed:
            "रजिस्ट्रेशन असफल हुआ।",

        loading:
            "लोड हो रहा है...",

        loadingBooks:
            "किताबें लोड हो रही हैं...",

        noBooks:
            "कोई किताब नहीं मिली।",

        noBorrowedBooks:
            "आपने कोई किताब उधार नहीं ली है।",

        pleaseLogin:
            "कृपया पहले लॉगिन करें।",

        enterEmailPassword:
            "कृपया ईमेल और पासवर्ड दर्ज करें।",

        enterRegisterDetails:
            "कृपया नाम, ईमेल और पासवर्ड दर्ज करें।",

        enterBookDetails:
            "कृपया किताब का नाम, लेखक और श्रेणी दर्ज करें।",

        loginSuccessful:
            "लॉगिन सफल हुआ!",

        loginFailed:
            "लॉगिन असफल हुआ।",

        bookAdded:
            "किताब सफलतापूर्वक जोड़ दी गई!",

        addBookFailed:
            "किताब जोड़ने में असफल।",

        bookBorrowed:
            "किताब सफलतापूर्वक ले ली गई!",

        borrowFailed:
            "किताब लेने में असफल।",

        bookReturnedSuccessfully:
            "किताब सफलतापूर्वक वापस कर दी गई!",

        returnFailed:
            "किताब वापस करने में असफल।",

        cannotConnect:
            "Backend से कनेक्ट नहीं हो सका।",

        failedLoadBooks:
            "किताबें लोड नहीं हो सकीं।",

        failedSearch:
            "किताबें खोजी नहीं जा सकीं।",

        available:
            "उपलब्ध",

        issued:
            "जारी",

        borrowed:
            "उधार लिया गया",

        loggedOut:
            "सफलतापूर्वक लॉगआउट हो गया!"
    }
};


/* =====================================================
   LANGUAGE
===================================================== */

function getLanguage() {

    return localStorage.getItem("language") || "en";

}


function t(key) {

    const language = getLanguage();

    return (
        translations[language]?.[key] ||
        translations.en[key] ||
        key
    );

}


/* =====================================================
   CHANGE LANGUAGE
===================================================== */

function changeLanguage() {

    const select =
        document.getElementById("languageSelect");

    if (!select) return;

    const language =
        translations[select.value]
            ? select.value
            : "en";

    localStorage.setItem(
        "language",
        language
    );

    document.documentElement.lang =
        language;


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (translations[language]?.[key]) {

                element.textContent =
                    translations[language][key];

            }

        });


    applyPlaceholders();
    translateCategories();


    const booksSection =
        document.getElementById("booksSection");

    if (
        booksSection &&
        booksSection.style.display !== "none"
    ) {

        loadBooks();

    }


    const myBooksSection =
        document.getElementById("myBooksSection");

    if (
        myBooksSection &&
        myBooksSection.style.display !== "none"
    ) {

        loadMyBooks();

    }

}


/* =====================================================
   PLACEHOLDERS
===================================================== */

function applyPlaceholders() {

    const fields = {

        title: "title",
        author: "author",
        bookCategory: "category",
        isbn: "isbn",
        description: "description",

        loginEmail: "email",
        loginPassword: "password",

        registerName: "name",
        registerEmail: "email",
        registerPassword: "password"

    };


    Object.entries(fields).forEach(
        ([id, key]) => {

            const element =
                document.getElementById(id);

            if (element) {

                element.placeholder =
                    t(key);

            }

        }
    );


    const searchInput =
        document.getElementById("searchInput");


    if (!searchInput) return;


    const language =
        getLanguage();


    if (language === "ta") {

        searchInput.placeholder =
            "தலைப்பு, ஆசிரியர் அல்லது ISBN மூலம் தேடவும்";

    }

    else if (language === "hi") {

        searchInput.placeholder =
            "नाम, लेखक या ISBN से खोजें";

    }

    else {

        searchInput.placeholder =
            "Search by title, author or ISBN";

    }

}


/* =====================================================
   CATEGORY TRANSLATION
===================================================== */

function translateCategories() {

    const select =
        document.getElementById("category");

    if (!select) return;


    Array.from(select.options)
        .forEach(option => {

            switch (option.value) {

                case "":
                    option.textContent =
                        t("allCategories");
                    break;

                case "Programming":
                    option.textContent =
                        t("programming");
                    break;

                case "Database":
                    option.textContent =
                        t("database");
                    break;

                case "Science":
                    option.textContent =
                        t("science");
                    break;

                case "Technology":
                    option.textContent =
                        t("technology");
                    break;

            }

        });

}


/* =====================================================
   HIDE ALL SECTIONS
===================================================== */

function hideSections() {

    const ids = [

        "homeSection",
        "booksSection",
        "loginSection",
        "registerSection",
        "myBooksSection"

    ];


    ids.forEach(id => {

        const section =
            document.getElementById(id);

        if (section) {

            section.style.display =
                "none";

        }

    });

}


/* =====================================================
   HOME
===================================================== */

function goHome() {

    hideSections();

    const section =
        document.getElementById("homeSection");

    if (section) {

        section.style.display =
            "block";

    }

}


/* =====================================================
   BOOKS
===================================================== */

function goBooks() {

    hideSections();

    const section =
        document.getElementById("booksSection");

    if (!section) return;

    section.style.display =
        "block";

    loadBooks();

}


/* =====================================================
   LOGIN
===================================================== */

function goLogin() {

    hideSections();

    const section =
        document.getElementById("loginSection");

    if (!section) return;

    section.style.display =
        "block";

}


/* =====================================================
   REGISTER
===================================================== */

function goRegister() {

    hideSections();

    const section =
        document.getElementById("registerSection");

    if (!section) return;

    section.style.display =
        "block";

}


/* =====================================================
   MY BOOKS
===================================================== */

function goMyBooks() {

    hideSections();

    const section =
        document.getElementById("myBooksSection");

    if (!section) return;

    section.style.display =
        "block";

    loadMyBooks();

}


/* =====================================================
   REGISTER USER
===================================================== */

async function registerUser() {

    const nameElement =
        document.getElementById("registerName");

    const emailElement =
        document.getElementById("registerEmail");

    const passwordElement =
        document.getElementById("registerPassword");


    if (
        !nameElement ||
        !emailElement ||
        !passwordElement
    ) {

        console.error(
            "Registration fields not found."
        );

        return;

    }


    const name =
        nameElement.value.trim();

    const email =
        emailElement.value.trim();

    const password =
        passwordElement.value;


    if (!name || !email || !password) {

        alert(
            t("enterRegisterDetails")
        );

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/auth/register`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        name,
                        email,
                        password

                    })

                }
            );


        const data =
            await getResponseData(response);


        console.log(
            "REGISTER RESPONSE:",
            data
        );


        if (!response.ok) {

            alert(
                data.message ||
                t("registerFailed")
            );

            return;

        }


        alert(
            t("registerSuccessful")
        );


        nameElement.value = "";
        emailElement.value = "";
        passwordElement.value = "";


        const loginEmail =
            document.getElementById(
                "loginEmail"
            );


        if (loginEmail) {

            loginEmail.value =
                email;

        }


        goLogin();

    }

    catch (error) {

        console.error(
            "Registration error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   LOGIN USER
===================================================== */

async function loginUser() {

    const emailElement =
        document.getElementById(
            "loginEmail"
        );

    const passwordElement =
        document.getElementById(
            "loginPassword"
        );


    if (
        !emailElement ||
        !passwordElement
    ) {

        console.error(
            "Login fields not found."
        );

        return;

    }


    const email =
        emailElement.value.trim();

    const password =
        passwordElement.value;


    if (!email || !password) {

        alert(
            t("enterEmailPassword")
        );

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/auth/login`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        email,
                        password

                    })

                }
            );


        const data =
            await getResponseData(response);


        console.log(
            "LOGIN RESPONSE:",
            data
        );


        if (!response.ok) {

            alert(
                data.message ||
                t("loginFailed")
            );

            return;

        }


        if (!data.token) {

            console.error(
                "No token returned from backend."
            );

            alert(
                t("loginFailed")
            );

            return;

        }


        localStorage.setItem(
            "token",
            data.token
        );


        if (data.user) {

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

        }


        alert(
            t("loginSuccessful")
        );


        passwordElement.value = "";


        goBooks();

    }

    catch (error) {

        console.error(
            "Login error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   SAFE RESPONSE HANDLER
===================================================== */

async function getResponseData(response) {

    const contentType =
        response.headers.get(
            "content-type"
        ) || "";


    if (
        contentType.includes(
            "application/json"
        )
    ) {

        return await response.json();

    }


    const text =
        await response.text();


    return {

        message:
            text || "Server returned an invalid response."

    };

}


/* =====================================================
   LOAD BOOKS
===================================================== */

async function loadBooks() {

    const bookList =
        document.getElementById(
            "bookList"
        );


    if (!bookList) {

        console.error(
            "bookList element not found."
        );

        return;

    }


    bookList.innerHTML =
        `<p>${t("loadingBooks")}</p>`;


    const token =
        localStorage.getItem(
            "token"
        );


    try {

        const headers = {};


        if (token) {

            headers.Authorization =
                `Bearer ${token}`;

        }


        const response =
            await fetch(
                `${API_URL}/api/books`,
                {

                    method: "GET",
                    headers

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            bookList.innerHTML =
                `<p>${
                    data.message ||
                    t("failedLoadBooks")
                }</p>`;

            return;

        }


        displayBooks(
            data.books || []
        );

    }

    catch (error) {

        console.error(
            "Load books error:",
            error
        );

        bookList.innerHTML =
            `<p>${t("cannotConnect")}</p>`;

    }

}


/* =====================================================
   DISPLAY BOOKS
===================================================== */

function displayBooks(books) {

    const bookList =
        document.getElementById(
            "bookList"
        );


    if (!bookList) return;


    bookList.innerHTML = "";


    if (
        !Array.isArray(books) ||
        books.length === 0
    ) {

        bookList.innerHTML =
            `<p>${t("noBooks")}</p>`;

        return;

    }


    books.forEach(book => {

        const div =
            document.createElement(
                "div"
            );


        div.className =
            "book-card";


        let statusText =
            book.status || "";


        if (
            book.status === "available"
        ) {

            statusText =
                t("available");

        }


        else if (
            book.status === "issued"
        ) {

            statusText =
                t("issued");

        }


        const cover =
            getCategoryCover(
                book.category
            );


        div.innerHTML = `

            <div class="book-cover ${cover.className}">
                <span>${cover.icon}</span>
            </div>

            <h3>
                ${escapeHTML(book.title)}
            </h3>

            <p>
                <strong>
                    ${t("titleLabel")}:
                </strong>
                ${escapeHTML(book.title)}
            </p>

            <p>
                <strong>
                    ${t("authorLabel")}:
                </strong>
                ${escapeHTML(book.author)}
            </p>

            <p>
                <strong>
                    ${t("categoryLabel")}:
                </strong>
                ${escapeHTML(book.category)}
            </p>

            <p>
                <strong>
                    ${t("isbnLabel")}:
                </strong>
                ${escapeHTML(book.isbn || "N/A")}
            </p>

            <p>
                <strong>
                    ${t("descriptionLabel")}:
                </strong>
                ${escapeHTML(book.description || "")}
            </p>

            <p>
                <strong>
                    ${t("statusLabel")}:
                </strong>
                ${escapeHTML(statusText)}
            </p>

            ${
                book.status === "available"

                ?

                `
                <button
                    type="button"
                    onclick="borrowBook('${escapeAttribute(book._id)}')"
                >
                    ${t("borrowBook")}
                </button>
                `

                :

                `
                <button
                    type="button"
                    disabled
                >
                    ${t("notAvailable")}
                </button>
                `
            }

        `;


        bookList.appendChild(div);

    });

}


/* =====================================================
   ADD BOOK
===================================================== */

async function addBook() {

    const token =
        localStorage.getItem(
            "token"
        );


    if (!token) {

        alert(
            t("pleaseLogin")
        );

        goLogin();

        return;

    }


    const titleElement =
        document.getElementById(
            "title"
        );

    const authorElement =
        document.getElementById(
            "author"
        );

    const categoryElement =
        document.getElementById(
            "bookCategory"
        );

    const isbnElement =
        document.getElementById(
            "isbn"
        );

    const descriptionElement =
        document.getElementById(
            "description"
        );


    if (
        !titleElement ||
        !authorElement ||
        !categoryElement
    ) {

        console.error(
            "Book form elements not found."
        );

        return;

    }


    const title =
        titleElement.value.trim();

    const author =
        authorElement.value.trim();

    const category =
        categoryElement.value.trim();

    const isbn =
        isbnElement
            ? isbnElement.value.trim()
            : "";

    const description =
        descriptionElement
            ? descriptionElement.value.trim()
            : "";


    if (
        !title ||
        !author ||
        !category
    ) {

        alert(
            t("enterBookDetails")
        );

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/books`,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`

                    },

                    body: JSON.stringify({

                        title,
                        author,
                        category,
                        isbn,
                        description

                    })

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            alert(
                data.message ||
                t("addBookFailed")
            );

            return;

        }


        alert(
            t("bookAdded")
        );


        titleElement.value = "";
        authorElement.value = "";
        categoryElement.value = "";

        if (isbnElement) {
            isbnElement.value = "";
        }

        if (descriptionElement) {
            descriptionElement.value = "";
        }


        loadBooks();

    }

    catch (error) {

        console.error(
            "Add book error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   BORROW BOOK
===================================================== */

async function borrowBook(bookId) {

    const token =
        localStorage.getItem(
            "token"
        );


    if (!token) {

        alert(
            t("pleaseLogin")
        );

        goLogin();

        return;

    }


    if (!bookId) {

        console.error(
            "Book ID is missing."
        );

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/borrow/${encodeURIComponent(bookId)}`,
                {

                    method: "POST",

                    headers: {

                        "Authorization":
                            `Bearer ${token}`

                    }

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            alert(
                data.message ||
                t("borrowFailed")
            );

            return;

        }


        alert(
            t("bookBorrowed")
        );


        loadBooks();

    }

    catch (error) {

        console.error(
            "Borrow error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   SEARCH BOOKS
===================================================== */

async function searchBooks() {

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    const categorySelect =
        document.getElementById(
            "category"
        );


    const searchText =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    const category =
        categorySelect
            ? categorySelect.value
                .toLowerCase()
                .trim()
            : "";


    const token =
        localStorage.getItem(
            "token"
        );


    try {

        const headers = {};


        if (token) {

            headers.Authorization =
                `Bearer ${token}`;

        }


        const response =
            await fetch(
                `${API_URL}/api/books`,
                {

                    method: "GET",
                    headers

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            alert(
                data.message ||
                t("failedSearch")
            );

            return;

        }


        let books =
            Array.isArray(data.books)
                ? data.books
                : [];


        books =
            books.filter(book => {

                const title =
                    String(
                        book.title || ""
                    ).toLowerCase();


                const author =
                    String(
                        book.author || ""
                    ).toLowerCase();


                const isbn =
                    String(
                        book.isbn || ""
                    ).toLowerCase();


                const bookCategory =
                    String(
                        book.category || ""
                    ).toLowerCase();


                const matchesText =

                    !searchText ||

                    title.includes(
                        searchText
                    ) ||

                    author.includes(
                        searchText
                    ) ||

                    isbn.includes(
                        searchText
                    );


                const matchesCategory =

                    !category ||

                    bookCategory ===
                    category;


                return (
                    matchesText &&
                    matchesCategory
                );

            });


        displayBooks(books);

    }

    catch (error) {

        console.error(
            "Search error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   LOAD MY BOOKS
===================================================== */

async function loadMyBooks() {

    const token =
        localStorage.getItem(
            "token"
        );


    if (!token) {

        alert(
            t("pleaseLogin")
        );

        goLogin();

        return;

    }


    const container =
        document.getElementById(
            "myBooksList"
        );


    if (!container) {

        console.error(
            "myBooksList element not found."
        );

        return;

    }


    container.innerHTML =
        `<p>${t("loading")}</p>`;


    try {

        const response =
            await fetch(
                `${API_URL}/api/borrow/my-books`,
                {

                    method: "GET",

                    headers: {

                        "Authorization":
                            `Bearer ${token}`

                    }

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            container.innerHTML =
                `<p>${
                    data.message ||
                    t("failedLoadBooks")
                }</p>`;

            return;

        }


        if (
            !Array.isArray(data.borrows) ||
            data.borrows.length === 0
        ) {

            container.innerHTML =
                `<p>
                    ${t("noBorrowedBooks")}
                </p>`;

            return;

        }


        container.innerHTML = "";


        data.borrows.forEach(
            borrow => {

                const book =
                    borrow.book;


                if (!book) return;


                const div =
                    document.createElement(
                        "div"
                    );


                div.className =
                    "book-card";


                let statusText =
                    borrow.status || "";


                if (
                    borrow.status ===
                    "borrowed"
                ) {

                    statusText =
                        t("borrowed");

                }


                else if (
                    borrow.status ===
                    "returned"
                ) {

                    statusText =
                        t("bookReturned");

                }


                const cover =
                    getCategoryCover(
                        book.category
                    );


                div.innerHTML = `

                    <div class="book-cover ${cover.className}">
                        <span>${cover.icon}</span>
                    </div>

                    <h3>
                        ${escapeHTML(book.title)}
                    </h3>

                    <p>
                        <strong>
                            ${t("titleLabel")}:
                        </strong>
                        ${escapeHTML(book.title)}
                    </p>

                    <p>
                        <strong>
                            ${t("authorLabel")}:
                        </strong>
                        ${escapeHTML(book.author)}
                    </p>

                    <p>
                        <strong>
                            ${t("categoryLabel")}:
                        </strong>
                        ${escapeHTML(book.category)}
                    </p>

                    <p>
                        <strong>
                            ${t("isbnLabel")}:
                        </strong>
                        ${escapeHTML(book.isbn || "N/A")}
                    </p>

                    <p>
                        <strong>
                            ${t("descriptionLabel")}:
                        </strong>
                        ${escapeHTML(book.description || "")}
                    </p>

                    <p>
                        <strong>
                            ${t("statusLabel")}:
                        </strong>
                        ${escapeHTML(statusText)}
                    </p>

                    ${
                        borrow.status === "borrowed"

                        ?

                        `
                        <button
                            type="button"
                            onclick="returnBook('${escapeAttribute(borrow._id)}')"
                        >
                            ${t("returnBook")}
                        </button>
                        `

                        :

                        `
                        <p>
                            ${t("bookReturned")}
                        </p>
                        `
                    }

                `;


                container.appendChild(div);

            }
        );

    }

    catch (error) {

        console.error(
            "My books error:",
            error
        );

        container.innerHTML =
            `<p>
                ${t("cannotConnect")}
            </p>`;

    }

}


/* =====================================================
   RETURN BOOK
===================================================== */

async function returnBook(borrowId) {

    const token =
        localStorage.getItem(
            "token"
        );


    if (!token) {

        alert(
            t("pleaseLogin")
        );

        goLogin();

        return;

    }


    if (!borrowId) {

        console.error(
            "Borrow ID is missing."
        );

        return;

    }


    try {

        const response =
            await fetch(
                `${API_URL}/api/borrow/return/${encodeURIComponent(borrowId)}`,
                {

                    method: "PUT",

                    headers: {

                        "Authorization":
                            `Bearer ${token}`

                    }

                }
            );


        const data =
            await getResponseData(response);


        if (!response.ok) {

            alert(
                data.message ||
                t("returnFailed")
            );

            return;

        }


        alert(
            t("bookReturnedSuccessfully")
        );


        loadMyBooks();

    }

    catch (error) {

        console.error(
            "Return book error:",
            error
        );

        alert(
            t("cannotConnect")
        );

    }

}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

    localStorage.removeItem(
        "token"
    );

    localStorage.removeItem(
        "user"
    );


    alert(
        t("loggedOut")
    );


    goHome();

}


/* =====================================================
   CATEGORY BOOK COVER
===================================================== */

function getCategoryCover(category) {

    const value =
        String(
            category || ""
        ).toLowerCase();


    if (
        value.includes("program")
    ) {

        return {

            className:
                "cover-programming",

            icon:
                "💻"

        };

    }


    if (
        value.includes("database")
    ) {

        return {

            className:
                "cover-database",

            icon:
                "🗄️"

        };

    }


    if (
        value.includes("science")
    ) {

        return {

            className:
                "cover-science",

            icon:
                "🔬"

        };

    }


    if (
        value.includes("technology") ||
        value.includes("tech")
    ) {

        return {

            className:
                "cover-technology",

            icon:
                "⚙️"

        };

    }


    return {

        className:
            "cover-default",

        icon:
            "📚"

    };

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(value) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        value ?? "";


    return div.innerHTML;

}



/* =====================================================
   ESCAPE ATTRIBUTE
===================================================== */

function escapeAttribute(value) {

    return String(
        value ?? ""
    )
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "BookNest JavaScript loaded successfully."
        );


        const savedLanguage =
            localStorage.getItem(
                "language"
            ) || "en";


        const languageSelect =
            document.getElementById(
                "languageSelect"
            );


        if (languageSelect) {

            languageSelect.value =
                savedLanguage;

        }


        changeLanguage();

        goHome();

    }
);

function getCurrentUser() {
    try {
        return JSON.parse(
            localStorage.getItem("user")
        );
    } catch (error) {
        return null;
    }
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === "admin";
}

function isStudent() {
    const user = getCurrentUser();
    return user && user.role === "student";
}
