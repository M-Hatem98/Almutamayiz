const home = document.getElementById('home');
const contactUs = document.getElementById('contact-us');

if(home) {
function switchLanguage(language) {
  const sliderSection = document.getElementById('sliderSection');
  const sliderHeading = document.getElementById('sliderHeading');
  const sliderParagraph = document.getElementById('sliderParagraph');
  const sliderLink = document.getElementById('sliderLink');
  const featureSection = document.getElementById('featureSection');
  const boxes = featureSection.querySelectorAll('.box');
  const aboutSection = document.getElementById('aboutSection');
  const abouttitle = document.getElementById('abouttitle');
  const paragraphs = aboutSection.querySelectorAll('p');
  // const webname = aboutSection.querySelector('.webname');
  const aboutreadMoreLink = document.getElementById('aboutreadMoreLink');
  const professionalSection = document.getElementById('professionalSection');
  const professionaltitle = document.getElementById('professionaltitle')
  const paragraphss = professionalSection.querySelectorAll('p');
  // const webnames = professionalSection.querySelectorAll('.webname');
  const accordionButtons = professionalSection.querySelectorAll('.card-header button');
  const accordionBodies = professionalSection.querySelectorAll('.card-body');
  const proreadMoreLinks = professionalSection.querySelector('a');
  const servicesHeading = document.getElementById('servicesHeading');
  const service1Title = document.getElementById('service1Title');
  const service1Text = document.getElementById('service1Text');
  const service2Title = document.getElementById('service2Title');
  const service2Text = document.getElementById('service2Text');
  const service3Title = document.getElementById('service3Title');
  const service3Text = document.getElementById('service3Text');
  const service4Text = document.getElementById('service4Text');
  const contact = document.getElementById( 'contact' );
  const contactHeading = document.getElementById("contactHeading");
  const infotitle = document.getElementById("infotitle");
  const infoaddress = document.getElementById("infoaddress");





  if (language === "en") {
    document.documentElement.lang = "en";
    setLanguage("en");
    document.getElementById("homeLink").textContent = "Home";
    document.getElementById("aboutLink").textContent = "About";
    document.getElementById("servicesLink").textContent = "Services";
    document.getElementById("contactLink").textContent = "Contact Us";
    document.getElementById("homeLink").setAttribute("href", "index.html");
    document.getElementById("aboutLink").setAttribute("href", "about.html");
    document
      .getElementById("servicesLink")
      .setAttribute("href", "service.html");
    document.getElementById("contactLink").setAttribute("href", "contact.html");
    sliderHeading.textContent = 'Repair and Maintenance Services';
    sliderParagraph.textContent = '"Expert care for your comfort: Almutamayiz for air conditioning, refrigeration, and electronics maintenance services"';
    sliderLink.textContent = 'Contact Us';
    sliderLink.setAttribute('href', 'contact.html');
    boxes[0].querySelector('.name').textContent = 'Repair';
    boxes[1].querySelector('.name').textContent = 'Improve';
    boxes[2].querySelector('.name').textContent = 'Maintain';
    abouttitle.textContent = 'About US'
    paragraphs[0].textContent =
      'At Almutamayiz, we specialize in providing top-notch services in the maintenance, washing, installation, and supply of air conditioning units. With our expertise, we ensure optimal functioning and longevity of your HVAC systems, ensuring your comfort all year round.';
    paragraphs[1].textContent =
      'In addition to air conditioning services, we excel in the maintenance of gas ovens, stoves, automatic washing machines, and central heaters. Our comprehensive approach covers every aspect of home comfort, guaranteeing efficient operation and peace of mind for our customers.';
    paragraphs[2].textContent =
      'With our mobile home service, we bring convenience right to your doorstep, offering timely solutions to your HVAC needs. Trust Almutamayiz for reliable, professional, and personalized service tailored to meet your specific requirements.';
    // webname.textContent = 'Almutamayiz';
    aboutreadMoreLink.textContent = 'Read More';
    
    professionaltitle.textContent = 'Professional Home Services by Almutamayiz'
    paragraphss[0].textContent =
      'At Almutamayiz, we take pride in offering comprehensive home services tailored to meet your needs. Our team of skilled technicians is dedicated to providing professional solutions for all your home maintenance requirements. From installation to repairs, we specialize in:';
    accordionButtons[0].textContent =
      'Air Conditioning Maintenance, Washing, Installation, and Supply:';
    accordionButtons[1].textContent = 'Gas Oven and Stove Maintenance:';
    accordionButtons[2].textContent = 'Automatic Washing Machine Maintenance:';
    accordionButtons[3].textContent = 'Central Heater Maintenance:';
    accordionBodies[0].textContent =
      'Ensure the optimal performance of your air conditioning units with our expert services. We handle everything from regular maintenance to installations and supply of high-quality AC units.';
    accordionBodies[1].textContent =
      'Trust us to keep your gas ovens and stoves in top condition. Our technicians are adept at diagnosing and repairing issues to ensure safe and efficient operation.';
    accordionBodies[2].textContent =
      'Keep your laundry routine uninterrupted with our washing machine maintenance services. We ensure your automatic washing machines are functioning smoothly.';
    accordionBodies[3].textContent =
      'Stay warm and cozy during the colder months with our central heater maintenance services. We ensure your heating system is running efficiently to provide you with comfort when you need it most.';
    paragraphss[1].textContent =
      'With Almutamayiz, you can rest assured that your home appliances and systems are in good hands. Experience professional service and peace of mind with our reliable home services.';
    // webnames.forEach((webname) => (webname.textContent = 'Almutamayiz'));
    proreadMoreLinks.textContent = 'Read More';

    servicesHeading.textContent = 'Our Services';
    service1Title.textContent = 'Air Conditioning Services';
    service1Text.textContent = 'Keep comfortable year-round with our expert AC services, covering installation, maintenance, and repairs for optimal performance.';
    service2Title.textContent = 'Maintenance';
    service2Text.textContent = 'Trust our technicians for thorough upkeep of gas ovens, stoves, and other appliances to ensure safe and efficient operation.';
    service3Title.textContent = 'Electrical';
    service3Text.textContent = 'Count on us for prompt and reliable repairs of washing machines, dryers, refrigerators, and more to keep your household running smoothly.';
    service4Text.textContent = 'View More'

    contactHeading.textContent = 'Contact Us'
    contact.innerHTML = `
    <ul class="mianul" id="contactList">
          <li class="mainli">
            Address
            <ul>
              <li>5 Al Ham Street -</li>
              <li>Downtown -</li>
              <li>Abu Dhabi -</li>
              <li>Al Ain City -</li>
              <li>United Arab Emirates</li>
            </ul>
          </li>
          <li class="mainli" id="contactsLabel">Contacts</li>
          <ul class="link_list">
            <li class="contactss">
              Email :
              <ul>
                <li>mohamedaldeab2024@gmail.com</li>
              </ul>
            </li>
            <li class="contactss">
              Phone :
              <ul>
                <li>+971 52 249 4959</li>
                <li>+971 55 741 3438</li>
              </ul>
            </li>
            <li class="contactss">
              Whatsapp :
              <ul>
                <li>+971 52 249 4959</li>
              </ul>
            </li>
          </ul>
        </ul>
    `
    infotitle.textContent = 'Get In Touch'
    infoaddress.textContent = '5 Al Ham Street - Downtown - Abu Dhabi - Al Ain City - United Arab Emirates'

    document.documentElement.setAttribute("dir", "ltr");
  } else if (language === "ar") {
    document.documentElement.lang = "ar";
    setLanguage("ar");
    // document.getElementById("homeLink").textContent = "الرئيسيه";
    // document.getElementById("aboutLink").textContent = "عنا";
    // document.getElementById("servicesLink").textContent = "خدماتنا";
    // document.getElementById("contactLink").textContent = "تواصل معنا";

    document.getElementById("homeLink").textContent = "الرئيسيه";
    document.getElementById("aboutLink").textContent = "عنا";
    document.getElementById("servicesLink").textContent = "خدماتنا";
    document.getElementById("contactLink").textContent = "تواصل معنا";
    document.getElementById("homeLink").setAttribute("href", "index.html");
    document.getElementById("aboutLink").setAttribute("href", "about.html");
    document
      .getElementById("servicesLink")
      .setAttribute("href", "service.html");
    document.getElementById("contactLink").setAttribute("href", "contact.html");

      sliderHeading.textContent = 'خدمات الصيانة والإصلاح';
      sliderParagraph.textContent = 'رعاية متخصصة لراحتك: المتميز لخدمات صيانة أجهزة التكييف الهوائي، التبريد، وصيانة الإلكترونيات';
      sliderLink.textContent = 'تواصل معنا';
      sliderLink.setAttribute('href', 'contact-ar.html');
      boxes[0].querySelector('.name').textContent = 'إصلاح';
    boxes[1].querySelector('.name').textContent = 'تحسين';
    boxes[2].querySelector('.name').textContent = 'صيانة';
    abouttitle.textContent = 'معلومات عنا '
    paragraphs[0].textContent =
      'في Almutamayiz ، نتخصص في تقديم خدمات متميزة في صيانة وغسيل وتركيب وتوريد وحدات تكييف الهواء. من خلال خبرتنا ، نضمن الأداء الأمثل والطول العمر لأنظمة HVAC الخاصة بك ، مما يضمن راحتك طوال العام.';
    paragraphs[1].textContent =
      'بالإضافة إلى خدمات تكييف الهواء ، نتفوق في صيانة الأفران الغازية والمواقد والغسالات الآلية والمراجل المركزية. يغطي نهجنا الشامل كل جانب من جوانب الراحة في المنزل ، مما يضمن تشغيلًا فعالًا وراحة البال لعملائنا.';
    paragraphs[2].textContent =
      'مع خدمتنا المنزلية المتنقلة ، نقدم الراحة مباشرة إلى باب منزلك ، ونقدم حلولًا في الوقت المناسب لاحتياجات HVAC الخاصة بك. ثق بـ Almutamayiz للحصول على خدمة موثوقة ومهنية وشخصية مصممة لتلبية متطلباتك الخاصة.';
    // webname.textContent = 'Almutamayiz';
    aboutreadMoreLink.textContent = 'اقرأ المزيد';

    professionaltitle.textContent = 'خدمات منزلية احترافية من المتميز'
    paragraphss[0].textContent =
    'في Almutamayiz ، نحن نفخر بتقديم خدمات منزلية شاملة مصممة لتلبية احتياجاتك. يخصص فريقنا من الفنيين المهرة لتقديم حلول مهنية لجميع متطلبات صيانة منزلك. من التركيب إلى الإصلاحات ، نتخصص في:';
  accordionButtons[0].textContent = 'صيانة وغسيل وتركيب وتوريد وحدات تكييف الهواء:';
  accordionButtons[1].textContent = 'صيانة الأفران والمواقد الغازية:';
  accordionButtons[2].textContent = 'صيانة الغسالات الآلية:';
  accordionButtons[3].textContent = 'صيانة المراجل المركزية:';
  accordionBodies[0].textContent =
    'تأكد من الأداء الأمثل لوحدات تكييف الهواء الخاصة بك مع خدماتنا الخبيرة. نتعامل مع كل شيء بدءًا من الصيانة العادية إلى التركيبات وتوريد وحدات تكييف الهواء عالية الجودة.';
  accordionBodies[1].textContent =
    'ثق بنا للحفاظ على أفرانك ومواقدك الغازية في حالة ممتازة. فنيونا ماهرون في تشخيص وإصلاح المشاكل لضمان التشغيل الآمن والفعّال.';
  accordionBodies[2].textContent =
    'احتفظ بروتين غسيلك منقطع النظير مع خدمات صيانة غسالات الغسيل الآلية لدينا. نحن نضمن أن غسالات الغسيل الآلية الخاصة بك تعمل بسلاسة.';
  accordionBodies[3].textContent =
    'ابقَ دافئًا ومرتاحًا خلال الأشهر الأكثر برودة مع خدمات صيانة المراجل المركزية لدينا. نحن نضمن أن نظام التدفئة الخاص بك يعمل بكفاءة لتوفير الراحة عندما تحتاج إليها بشكل أكبر.';
  paragraphss[1].textContent =
    'مع Almutamayiz ، يمكنك أن تطمئن إلى أن أجهزة منزلك وأنظمة التشغيل في أيدٍ جيدة. احصل على خدمة مهنية وراحة بال مع خدماتنا المنزلية الموثوقة.';
  // webnames.forEach((webname) => (webname.textContent = 'Almutamayiz'));
  proreadMoreLinks.textContent = 'اقرأ المزيد';

  servicesHeading.textContent = 'خدماتنا';
  service1Title.textContent = 'خدمات تكييف الهواء';
  service1Text.textContent = 'ابق مرتاحًا على مدار السنة مع خدمات تكييف الهواء الخاصة بنا ، التي تشمل التركيب والصيانة والإصلاحات لضمان الأداء الأمثل.';
  service2Title.textContent = 'الصيانة';
  service2Text.textContent = 'ثق بفنيينا للحفاظ الدائم على الأفران الغازية والمواقد والأجهزة الأخرى لضمان التشغيل الآمن والفعّال.';
  service3Title.textContent = 'الكهربائية';
  service3Text.textContent = 'اعتمد علينا لإصلاحات سريعة وموثوقة للغسالات والمجففات والثلاجات والمزيد للحفاظ على سير منزلك بسلاسة.';
  service4Text.textContent = 'تعرف على المزيد'

  contactHeading.textContent = 'تواصل معنا '
  contact.innerHTML = `
  <ul class="mianul" id="contactList">
        <li class="mainli">
          العنوان
          <ul>
            <li>-5 شارع الهَاَم</li>
            <li>وسط المدينة -</li>
            <li>أبو ظبي -</li>
            <li>مدينة العين -</li>
            <li>الإمارات العربية المتحدة</li>
          </ul>
        </li>
        <li class="mainli" id="contactsLabel">التواصل</li>
        <ul class="link_list">
          <li class="contactss">
            بريد الكترونى :
            <ul>
              <li>mohamedaldeab2024@gmail.com</li>
            </ul>
          </li>
          <li class="contactss">
            تليفون :
            <ul>
              <li>+971 52 249 4959</li>
              <li>+971 55 741 3438</li>
            </ul>
          </li>
          <li class="contactss">
            واتساب :
            <ul>
              <li>+971 52 249 4959</li>
            </ul>
          </li>
        </ul>
      </ul>
  `
  infotitle.textContent = 'ابقى على تواصل'
  infoaddress.textContent = '5 شارع الهام - وسط البلد - أبوظبي - مدينة العين - الإمارات العربية المتحدة'




    document.documentElement.setAttribute("dir", "rtl");
  }
}

function setLanguage(language) {
  localStorage.setItem("preferredLanguage", language);
}

function getSavedLanguage() {
  return localStorage.getItem("preferredLanguage") || "en";
}

// Load the saved language when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const savedLanguage = getSavedLanguage();
  switchLanguage(savedLanguage);
});
}


const aboutUs = document.getElementById('about-us');

if(aboutUs){
    function switchLanguage(language) {
      const sliderHeading = document.getElementById('sliderHeading');
      const sliderParagraph = document.getElementById('sliderParagraph');
      const sliderLink = document.getElementById('sliderLink');
      const featureSection = document.getElementById('featureSection');
      const boxes = featureSection.querySelectorAll('.box');
      const aboutSection = document.getElementById('aboutSection');
      const abouttitle = document.getElementById('abouttitle');
      const paragraphs = aboutSection.querySelectorAll('p');
      // const webname = aboutSection.querySelector('.webname');
      const aboutreadMoreLink = document.getElementById('aboutreadMoreLink');
  
      const infotitle = document.getElementById("infotitle");
      const infoaddress = document.getElementById("infoaddress");
    
    
    
    
    
      if (language === "en") {
        document.documentElement.lang = "en";
        setLanguage("en");
        document.getElementById("homeLink").textContent = "Home";
        document.getElementById("aboutLink").textContent = "About";
        document.getElementById("servicesLink").textContent = "Services";
        document.getElementById("contactLink").textContent = "Contact Us";
        document.getElementById("homeLink").setAttribute("href", "index.html");
        document.getElementById("aboutLink").setAttribute("href", "about.html");
        document
          .getElementById("servicesLink")
          .setAttribute("href", "service.html");
        document.getElementById("contactLink").setAttribute("href", "contact.html");
        sliderHeading.textContent = 'Repair and Maintenance Services';
        sliderParagraph.textContent = '"Expert care for your comfort: Almutamayiz for air conditioning, refrigeration, and electronics maintenance services"';
        sliderLink.textContent = 'Contact Us';
        sliderLink.setAttribute('href', 'contact.html');
        boxes[0].querySelector('.name').textContent = 'Repair';
        boxes[1].querySelector('.name').textContent = 'Improve';
        boxes[2].querySelector('.name').textContent = 'Maintain';
        abouttitle.textContent = 'About US'
        paragraphs[0].textContent =
          'At Almutamayiz, we specialize in providing top-notch services in the maintenance, washing, installation, and supply of air conditioning units. With our expertise, we ensure optimal functioning and longevity of your HVAC systems, ensuring your comfort all year round.';
        paragraphs[1].textContent =
          'In addition to air conditioning services, we excel in the maintenance of gas ovens, stoves, automatic washing machines, and central heaters. Our comprehensive approach covers every aspect of home comfort, guaranteeing efficient operation and peace of mind for our customers.';
        paragraphs[2].textContent =
          'With our mobile home service, we bring convenience right to your doorstep, offering timely solutions to your HVAC needs. Trust Almutamayiz for reliable, professional, and personalized service tailored to meet your specific requirements.';
        // webname.textContent = 'Almutamayiz';
        aboutreadMoreLink.textContent = 'Read More';
        infotitle.textContent = 'Get In Touch'
        infoaddress.textContent = '5 Al Ham Street - Downtown - Abu Dhabi - Al Ain City - United Arab Emirates'
    
        document.documentElement.setAttribute("dir", "ltr");
      } else if (language === "ar") {
        document.documentElement.lang = "ar";
        setLanguage("ar");
        document.getElementById("homeLink").textContent = "الرئيسيه";
        document.getElementById("aboutLink").textContent = "عنا";
        document.getElementById("servicesLink").textContent = "خدماتنا";
        document.getElementById("contactLink").textContent = "تواصل معنا";
    
          sliderHeading.textContent = 'خدمات الصيانة والإصلاح';
          sliderParagraph.textContent = 'رعاية متخصصة لراحتك: المتميز لخدمات صيانة أجهزة التكييف الهوائي، التبريد، وصيانة الإلكترونيات';
          sliderLink.textContent = 'تواصل معنا';
          sliderLink.setAttribute('href', 'contact-ar.html');
          boxes[0].querySelector('.name').textContent = 'إصلاح';
        boxes[1].querySelector('.name').textContent = 'تحسين';
        boxes[2].querySelector('.name').textContent = 'صيانة';
        abouttitle.textContent = 'معلومات عنا '
        paragraphs[0].textContent =
          'في Almutamayiz ، نتخصص في تقديم خدمات متميزة في صيانة وغسيل وتركيب وتوريد وحدات تكييف الهواء. من خلال خبرتنا ، نضمن الأداء الأمثل والطول العمر لأنظمة HVAC الخاصة بك ، مما يضمن راحتك طوال العام.';
        paragraphs[1].textContent =
          'بالإضافة إلى خدمات تكييف الهواء ، نتفوق في صيانة الأفران الغازية والمواقد والغسالات الآلية والمراجل المركزية. يغطي نهجنا الشامل كل جانب من جوانب الراحة في المنزل ، مما يضمن تشغيلًا فعالًا وراحة البال لعملائنا.';
        paragraphs[2].textContent =
          'مع خدمتنا المنزلية المتنقلة ، نقدم الراحة مباشرة إلى باب منزلك ، ونقدم حلولًا في الوقت المناسب لاحتياجات HVAC الخاصة بك. ثق بـ Almutamayiz للحصول على خدمة موثوقة ومهنية وشخصية مصممة لتلبية متطلباتك الخاصة.';
        // webname.textContent = 'Almutamayiz';
        aboutreadMoreLink.textContent = 'اقرأ المزيد';
        infotitle.textContent = 'ابقى على تواصل'
        infoaddress.textContent = '5 شارع الهام - وسط البلد - أبوظبي - مدينة العين - الإمارات العربية المتحدة'
      
      
    
        document.documentElement.setAttribute("dir", "rtl");
      }
    }
    
    function setLanguage(language) {
      localStorage.setItem("preferredLanguage", language);
    }
    
    function getSavedLanguage() {
      return localStorage.getItem("preferredLanguage") || "en";
    }
    
    // Load the saved language when the page loads
    document.addEventListener("DOMContentLoaded", function () {
      const savedLanguage = getSavedLanguage();
      switchLanguage(savedLanguage);
    });
  }

  
  const services = document.getElementById('services');

if(services){
  function switchLanguage(language) {
    const sliderHeading = document.getElementById('sliderHeading');
    const sliderParagraph = document.getElementById('sliderParagraph');
    const sliderLink = document.getElementById('sliderLink');
    const featureSection = document.getElementById('featureSection');
    const boxes = featureSection.querySelectorAll('.box');
    const infotitle = document.getElementById("infotitle");
    const infoaddress = document.getElementById("infoaddress");
    
    
    const servicesHeading = document.getElementById('servicesHeading');
    const service1Title = document.getElementById('service1Title');
    const service1Text = document.getElementById('service1Text');
    const service2Title = document.getElementById('service2Title');
    const service2Text = document.getElementById('service2Text');
    const service3Title = document.getElementById('service3Title');
    const service3Text = document.getElementById('service3Text');
    const service4Text = document.getElementById('service4Text');
  
  
  
  
    if (language === "en") {
      document.documentElement.lang = "en";
      setLanguage("en");
      document.getElementById("homeLink").textContent = "Home";
      document.getElementById("aboutLink").textContent = "About";
      document.getElementById("servicesLink").textContent = "Services";
      document.getElementById("contactLink").textContent = "Contact Us";
      document.getElementById("homeLink").setAttribute("href", "index.html");
      document.getElementById("aboutLink").setAttribute("href", "about.html");
      document
        .getElementById("servicesLink")
        .setAttribute("href", "service.html");
      document.getElementById("contactLink").setAttribute("href", "contact.html");
      sliderHeading.textContent = 'Repair and Maintenance Services';
      sliderParagraph.textContent = '"Expert care for your comfort: Almutamayiz for air conditioning, refrigeration, and electronics maintenance services"';
      sliderLink.textContent = 'Contact Us';
      sliderLink.setAttribute('href', 'contact.html');
      boxes[0].querySelector('.name').textContent = 'Repair';
      boxes[1].querySelector('.name').textContent = 'Improve';
      boxes[2].querySelector('.name').textContent = 'Maintain';
      infotitle.textContent = 'Get In Touch'
      infoaddress.textContent = '5 Al Ham Street - Downtown - Abu Dhabi - Al Ain City - United Arab Emirates'


      servicesHeading.textContent = 'Our Services';
      service1Title.textContent = 'Air Conditioning Services';
      service1Text.textContent = 'Keep comfortable year-round with our expert AC services, covering installation, maintenance, and repairs for optimal performance.';
      service2Title.textContent = 'Maintenance';
      service2Text.textContent = 'Trust our technicians for thorough upkeep of gas ovens, stoves, and other appliances to ensure safe and efficient operation.';
      service3Title.textContent = 'Electrical';
      service3Text.textContent = 'Count on us for prompt and reliable repairs of washing machines, dryers, refrigerators, and more to keep your household running smoothly.';
      service4Text.textContent = 'View More'
  

  


      document.documentElement.setAttribute("dir", "ltr");
    } else if (language === "ar") {
      document.documentElement.lang = "ar";
      setLanguage("ar");
      document.getElementById("homeLink").textContent = "الرئيسيه";
      document.getElementById("aboutLink").textContent = "عنا";
      document.getElementById("servicesLink").textContent = "خدماتنا";
      document.getElementById("contactLink").textContent = "تواصل معنا";
        sliderHeading.textContent = 'خدمات الصيانة والإصلاح';
        sliderParagraph.textContent = 'رعاية متخصصة لراحتك: المتميز لخدمات صيانة أجهزة التكييف الهوائي، التبريد، وصيانة الإلكترونيات';
        sliderLink.textContent = 'تواصل معنا';
        sliderLink.setAttribute('href', 'contact-ar.html');
        boxes[0].querySelector('.name').textContent = 'إصلاح';
      boxes[1].querySelector('.name').textContent = 'تحسين';
      boxes[2].querySelector('.name').textContent = 'صيانة';
      infotitle.textContent = 'ابقى على تواصل'
      infoaddress.textContent = '5 شارع الهام - وسط البلد - أبوظبي - مدينة العين - الإمارات العربية المتحدة'
    

      
servicesHeading.textContent = 'خدماتنا';
service1Title.textContent = 'خدمات تكييف الهواء';
service1Text.textContent = 'ابق مرتاحًا على مدار السنة مع خدمات تكييف الهواء الخاصة بنا ، التي تشمل التركيب والصيانة والإصلاحات لضمان الأداء الأمثل.';
service2Title.textContent = 'الصيانة';
service2Text.textContent = 'ثق بفنيينا للحفاظ الدائم على الأفران الغازية والمواقد والأجهزة الأخرى لضمان التشغيل الآمن والفعّال.';
service3Title.textContent = 'الكهربائية';
service3Text.textContent = 'اعتمد علينا لإصلاحات سريعة وموثوقة للغسالات والمجففات والثلاجات والمزيد للحفاظ على سير منزلك بسلاسة.';
service4Text.textContent = 'تعرف على المزيد'
    
  
      document.documentElement.setAttribute("dir", "rtl");
    }
  }
  
  function setLanguage(language) {
    localStorage.setItem("preferredLanguage", language);
  }
  
  function getSavedLanguage() {
    return localStorage.getItem("preferredLanguage") || "en";
  }
  
  // Load the saved language when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = getSavedLanguage();
    switchLanguage(savedLanguage);
  });
}



if(contactUs){
  function switchLanguage(language) {
    const sliderHeading = document.getElementById('sliderHeading');
    const sliderParagraph = document.getElementById('sliderParagraph');
    const sliderLink = document.getElementById('sliderLink');
    const featureSection = document.getElementById('featureSection');
    const boxes = featureSection.querySelectorAll('.box');
    const infotitle = document.getElementById("infotitle");
    const infoaddress = document.getElementById("infoaddress");
    
    
    const contact = document.getElementById( 'contact' );
    const contactHeading = document.getElementById("contactHeading");
  
  
  
  
    if (language === "en") {
      document.documentElement.lang = "en";
      setLanguage("en");
      document.getElementById("homeLink").textContent = "Home";
      document.getElementById("aboutLink").textContent = "About";
      document.getElementById("servicesLink").textContent = "Services";
      document.getElementById("contactLink").textContent = "Contact Us";
      document.getElementById("homeLink").setAttribute("href", "index.html");
      document.getElementById("aboutLink").setAttribute("href", "about.html");
      document
        .getElementById("servicesLink")
        .setAttribute("href", "service.html");
      document.getElementById("contactLink").setAttribute("href", "contact.html");
      sliderHeading.textContent = 'Repair and Maintenance Services';
      sliderParagraph.textContent = '"Expert care for your comfort: Almutamayiz for air conditioning, refrigeration, and electronics maintenance services"';
      sliderLink.textContent = 'Contact Us';
      sliderLink.setAttribute('href', 'contact.html');
      boxes[0].querySelector('.name').textContent = 'Repair';
      boxes[1].querySelector('.name').textContent = 'Improve';
      boxes[2].querySelector('.name').textContent = 'Maintain';
      infotitle.textContent = 'Get In Touch'
      infoaddress.textContent = '5 Al Ham Street - Downtown - Abu Dhabi - Al Ain City - United Arab Emirates'
  

      contactHeading.textContent = 'Contact Us'
      contact.innerHTML = `
      <ul class="mianul" id="contactList">
            <li class="mainli">
              Address
              <ul>
                <li>5 Al Ham Street -</li>
                <li>Downtown -</li>
                <li>Abu Dhabi -</li>
                <li>Al Ain City -</li>
                <li>United Arab Emirates</li>
              </ul>
            </li>
            <li class="mainli" id="contactsLabel">Contacts</li>
            <ul class="link_list">
              <li class="contactss">
                Email :
                <ul>
                  <li>mohamedaldeab2024@gmail.com</li>
                </ul>
              </li>
              <li class="contactss">
                Phone :
                <ul>
                  <li>+971 52 249 4959</li>
                  <li>+971 55 741 3438</li>
                </ul>
              </li>
              <li class="contactss">
                Whatsapp :
                <ul>
                  <li>+971 52 249 4959</li>
                </ul>
              </li>
            </ul>
          </ul>
      `


      document.documentElement.setAttribute("dir", "ltr");
    } else if (language === "ar") {
      document.documentElement.lang = "ar";
      setLanguage("ar");
      document.getElementById("homeLink").textContent = "الرئيسيه";
      document.getElementById("aboutLink").textContent = "عنا";
      document.getElementById("servicesLink").textContent = "خدماتنا";
      document.getElementById("contactLink").textContent = "تواصل معنا";
        sliderHeading.textContent = 'خدمات الصيانة والإصلاح';
        sliderParagraph.textContent = 'رعاية متخصصة لراحتك: المتميز لخدمات صيانة أجهزة التكييف الهوائي، التبريد، وصيانة الإلكترونيات';
        sliderLink.textContent = 'تواصل معنا';
        sliderLink.setAttribute('href', 'contact-ar.html');
        boxes[0].querySelector('.name').textContent = 'إصلاح';
      boxes[1].querySelector('.name').textContent = 'تحسين';
      boxes[2].querySelector('.name').textContent = 'صيانة';
      infotitle.textContent = 'ابقى على تواصل'
      infoaddress.textContent = '5 شارع الهام - وسط البلد - أبوظبي - مدينة العين - الإمارات العربية المتحدة'
    

      contactHeading.textContent = 'تواصل معنا '
      contact.innerHTML = `
      <ul class="mianul" id="contactList">
            <li class="mainli">
              العنوان
              <ul>
                <li>-5 شارع الهَاَم</li>
                <li>وسط المدينة -</li>
                <li>أبو ظبي -</li>
                <li>مدينة العين -</li>
                <li>الإمارات العربية المتحدة</li>
              </ul>
            </li>
            <li class="mainli" id="contactsLabel">التواصل</li>
            <ul class="link_list">
              <li class="contactss">
                بريد الكترونى :
                <ul>
                  <li>mohamedaldeab2024@gmail.com</li>
                </ul>
              </li>
              <li class="contactss">
                تليفون :
                <ul>
                  <li>+971 52 249 4959</li>
                  <li>+971 55 741 3438</li>
                </ul>
              </li>
              <li class="contactss">
                واتساب :
                <ul>
                  <li>+971 52 249 4959</li>
                </ul>
              </li>
            </ul>
          </ul>
      `
    
  
      document.documentElement.setAttribute("dir", "rtl");
    }
  }
  
  function setLanguage(language) {
    localStorage.setItem("preferredLanguage", language);
  }
  
  function getSavedLanguage() {
    return localStorage.getItem("preferredLanguage") || "en";
  }
  
  // Load the saved language when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = getSavedLanguage();
    switchLanguage(savedLanguage);
  });
}