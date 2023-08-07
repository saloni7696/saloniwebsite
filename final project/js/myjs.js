function bb(){
    document.getElementById('ss').innerHTML = "<h3>A Vision to Bridge Generations - Taking Gramophones to the Web</h3><p>At Victor, we believe that music is not just heard; it is felt. It has the power to evoke emotions, kindle memories, and create moments that linger in your heart forever. As you explore our collection, you'll find yourself captivated by the soul-stirring symphonies that emerge from these enchanting machines.We are excited to embark on this musical journey with you, and we promise to deliver nothing short of the extraordinary.</p>";
    document.getElementById('ss').style.padding="2%";
    document.getElementById('ss').style.fontSize="1em";
    document.getElementById('ss').style.background="#b59e67";
    document.getElementById('ss').style.color="#1f1e1e";
}
function sec1(){
    document.getElementById('ss1').innerHTML = "<div><h3>Quality you can afford</h3><p> With Victor Talking Machine Company, quality and affordability go hand in hand. Immerse yourself in the golden era of music, indulge in the allure of vintage sound, and let our carefully curated records bring joy and nostalgia to your ears, all within your means. </p></div>";
    document.getElementById('ss2').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec2(){
    document.getElementById('ss2').innerHTML = "<div><h3>Products you can trust</h3><p>Each record in our collection undergoes meticulous inspection and grading by our team of experts, ensuring that only the finest and most genuine pieces make it to your hands. We take pride in offering you records that have been cared for, preserving their historical value and delivering an unparalleled listening experience.</p></div>";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec3(){
    document.getElementById('ss3').innerHTML = " <div>                <h3>Purchases with an impact</h3>                <p>                    A portion of every sale goes towards supporting music education programs for underprivileged communities. We believe that music has the power to inspire, uplift, and transform lives, and we are committed to sharing this magic with those who need it the most.                </p>            </div>";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss2').innerHTML = " ";
    document.getElementById('ss4').innerHTML = " ";
}
function sec4(){
    document.getElementById('ss4').innerHTML = " <div>                <h3>Money back guarantee</h3>                <p>                    Our commitment to your satisfaction is unwavering, and we want you to have complete confidence when exploring the vintage sounds in our collection. We take pride in curating records with meticulous care, and we are confident that you will love the timeless melodies that grace your ears.                </p>            </div> ";
    document.getElementById('ss1').innerHTML = " ";
    document.getElementById('ss3').innerHTML = " ";
    document.getElementById('ss2').innerHTML = " ";
}
function toggleFileSelector() {
    const querySelect = document.getElementById('query');
    const fileSelection = document.getElementById('fileSelection');
    const selectedOption = querySelect.value;
  
    if (selectedOption === 'damaged') {
        fileSelection.style.display = 'block';
        otherText.style.display = 'none';
      } else if (selectedOption === 'other') {
        fileSelection.style.display = 'none';
        otherText.style.display = 'block';
      } else {
        fileSelection.style.display = 'none';
        otherText.style.display = 'none';
        otherInput.value = ''; // Reset the input value if not selected
      }
    }

    function toggleContactInfo(contactType) {
        const emailDetails = document.getElementById('emailDetails');
        const phoneDetails = document.getElementById('phoneDetails');
        const emailContent = document.getElementById('emailContent');
        const phoneContent = document.getElementById('phoneContent');
      
        if (contactType === 'email') {
          if (emailContent.style.display === 'none') {
            emailContent.style.display = 'inline';
            emailDetails.innerText = 'Click to hide';
          } else {
            emailContent.style.display = 'none';
            emailDetails.innerText = 'Click to view';
          }
        } else if (contactType === 'phone') {
          if (phoneContent.style.display === 'none') {
            phoneContent.style.display = 'inline';
            phoneDetails.innerText = 'Click to hide';
          } else {
            phoneContent.style.display = 'none';
            phoneDetails.innerText = 'Click to view';
          }
        }
      }

      
const products = document.querySelectorAll('.product');

// Added event listener for each product to handle hover
products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.classList.add('enlarged');
  });

  product.addEventListener('mouseout', () => {
    product.classList.remove('enlarged');
  });
});

function success(){
  alert("You've successfuly subscribed." );
}

// Function to show the cookie alert and handle acceptance

function sss() {
  if (!localStorage.getItem('cookieAccepted')) {
      alert('This website uses cookies to enhance your experience. By continuing, you accept our use of cookies.');
      localStorage.setItem('cookieAccepted', true);
  } else {
      alert('You have already accepted cookies. Thank you!');
  }
}

    