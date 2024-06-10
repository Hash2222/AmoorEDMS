class Translator {
	isArabic = true;

	setIsArabic(value) {
		this.isArabic = value;
		document.cookie = `isArabic=${value}; path=/`;
		document.body.dir = this.isArabic ? "rtl" : "ltr";
		document.getElementById("langDropdown").innerText = this.isArabic ? "اللغة" : "Language";
	}

	
	#translationsArabic = {
		"AmoorEDMS": "أمور إي دي إم إس",
		"Toggle navigation": "تبديل التنقل",
		"Home": "الرئيسية",
		"Contact Us": "اتصل بنا",
		"Features": "الميزات",
		"Get Started": "ابدأ الآن",
		"Advanced document management for businesses of all sizes.": "إدارة المستندات المتقدمة للأعمال من جميع الأحجام.",
		"Manage less. Store more.": "قلل الادارة. اخزن اكثر.",
		"Previous": "السابق",
		"Next": "التالي",
		"Security. It's here.": "الأمان. انه هنا.",
		"AmoorEDMS secures your documents by requiring special VPN clients for employee access to prevent unauthorized access to your documents.": "يأمن أمور أي دي أم أس مستنداتك عن طريق طلب عملاء VPN خاصين لمنع الوصول غير المسموح به إلى مستنداتك.",
		"Separation of Concerns": "فصل المسؤوليات",
		"AmoorEDMS provides great separation of concerns, users (aka employees) are separated into groups, and their permissions are inherited from their groups, so employees from one group do not have access to the work of another.": "توفر أمور إي دي إم إس فصلاً رائعًا للمخاوف، حيث يتم فصل المستخدمين (أي الموظفين) إلى مجموعات، وتُورث أذوناتهم من مجموعاتهم، بحيث لا يتمكن الموظفون من مجموعة معينة من الوصول إلى عمل مجموعة أخرى.",
		"Lightning Fast Search": "بحث سريع كالبرق",
		"AmoorEDMS offers lightning fast search functionality that is designed to be as user-friendly as possible, and also has a way to view documents in a tabular manner without the images for fast access.": "تقدم أمور إي دي إم إس وظيفة بحث سريعة كالبرق مصممة لتكون سهلة الاستخدام قدر الإمكان، وتوفر أيضًا طريقة لعرض المستندات في شكل جدولي دون الصور للوصول السريع.",
		"Price. Buy.": "السعر. اشتري.",
		"(All purchases are one-time.)": "(جميع المشتريات لمرة واحدة.)",
		"Basic": "أساسي",
		"Pro": "متقدم",
		"Enterprise": "مميز",
		"Custom": "مخصص",
		"Let's talk.": "دعونا نتحدث.",
		"Up to 900,000 documents.": "حتى 900,000 مستند.",
		"Unlimited users.": "مستخدمون غير محدودين.",
		"VPN for restricting access to employees.": "VPN لتقييد وصول الموظفين.",
		"Unlimited VPN clients.": "عملاء VPN غير محدودين.",
		"Up to 20,000,000 documents.": "حتى 20,000,000 مستند.",
		"Up to 40,000,000 documents.": "حتى 40,000,000 مستند.",
		"Amount of docs you want.": "كمية المستندات التي تريدها.",
		"© 2021 AmoorEDMS, Inc": "© 2021 أمور إي دي إم إس، شركة",
		"$1000": "1000 دولار",
		"$3000": "3000 دولار",
		"$10,000": "10,000 دولار",
		"/business": "/شركة",
		"Language": "اللغة"
	}

	#translationsEnglish = Object.fromEntries(
		Object.entries(this.#translationsArabic).map(([key, value]) => [value, key])
	);

	translateTextNodeToArabic(textNode){
		const text = textNode.nodeValue;
		const translation = this.#translationsArabic[text];
		if (translation) {
			textNode.nodeValue = translation;
		}
	}

	translateTextNodeToEnglish(textNode){
		const text = textNode.nodeValue;
		const translation = this.#translationsEnglish[text];
		if (translation) {
			textNode.nodeValue = translation;
		}
	}

	traverseDOMAndTranslateToArabic(node){
		this.translateTextNodeToArabic(node);
		for (const element of node.childNodes) {
			this.traverseDOMAndTranslateToArabic(element);
		}
	}

	traverseDOMAndTranslateToEnglish(node){
		this.translateTextNodeToEnglish(node);
		for (const element of node.childNodes) {
			this.traverseDOMAndTranslateToEnglish(element);
		}
	}

	translateDoc(){
		if (this.isArabic) {
			this.traverseDOMAndTranslateToArabic(document.body);
		} else {
			this.traverseDOMAndTranslateToEnglish(document.body);
		}
	}

	// Constructor:
	constructor() {
		if (!document.cookie.includes("isArabic=false"))
		{
			document.body.dir = this.isArabic ? "rtl" : "ltr";
			document.getElementById("langDropdown").innerText = this.isArabic ? "اللغة" : "Language";
			this.setIsArabic(true);
		}
		else if (document.cookie.includes("isArabic=false"))
		{
			document.body.dir = this.isArabic ? "rtl" : "ltr";
			document.getElementById("langDropdown").innerText = this.isArabic ? "اللغة" : "Language";
			this.setIsArabic(false);
		}
	}
}

function setLangAndTranslate(lang) {
	tr.setIsArabic(lang);
	tr.translateDoc();
}

let tr = null;

document.addEventListener("DOMContentLoaded", () => {
	tr = new Translator();
	tr.translateDoc()
})
