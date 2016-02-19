/*(function () {
    



     var para;
    para = document.getElementById("section-heading");
    para.innerHTML = "My name is Kishan Manjunath and I am a Web Developer;
	living in Barrie When it comes down to it I am just a regular guy who is passionate about development and design"
	
	var para1;
    para1 = document.getElementById("text-faded");
    para1.innerHTML = "I grew up in a small town in India, and I often got in trouble in
	high school for doodling in my notebooks. However, I wasn't drawing what most children draw. I was sketching roller coasters, and athletic shoes.I had discovered my love for design and realized it was my calling. After high school, I decided 
                    	I wanted to make a career out of it. I am attending Georgian College to upgrade
						 my skills in Web Design & Development";


var para2;
    para2 = document.getElementById("text-muted");
    para2.innerHTML = "My designs will capture the attention of your audience through interaction, ease-of-use and value. I believe that every great design starts with fresh creative. Before a single pixel is populated, 
                        	I will assist you in defining the creative voice for your brand and its visual presence on the web. 
							The website will be responsive on every device - irrespective, if its a  laptop, tablet or your cell phone.";

var para3;
    para3 = document.getElementById("text-muted");
    para3.innerHTML = "Our Search Engine Optimization service ensures that your website ranks among the top in all major search engines like Google, Yahoo, MSN, Bing etc.
						Our talented and professional team of search engine experts are acquainted with the latest search engine trends and techniques and they apply their skills to make your website rank in the top ten of majo
					r search engines."

*/
(function () {

if (document.getElementById("contact") != null) {
        console.log("contact page");
		
		var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message= document.getElementById("message");
        var submitButton = document.getElementById("submitbtn");
        
}
submitButton.addEventListener("click", function(event){
            event.preventDefault();
            console.log("name: " + name.value);
			console.log("email: " + email.value);
            console.log("message: " + message.value);
        });
})();
