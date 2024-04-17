document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe  class="contact__iframe"     frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65581.78608300466!2d-3.547918235826151!3d43.41187186613449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ec0178e2b6081%3A0x3f8e3655d846f2a8!2sPlaya%20La%20Salv%C3%A9%20de%20Laredo!5e0!3m2!1ses-419!2ses!4v1708066276409!5m2!1ses-419!2ses"  ></iframe>
        
        `;
    }, 500);
});