var f1 = document.getElementById('mode');
var state = 1;
f1.addEventListener('click', function(){
    if(state==1)
        // {document.getElementById('main').style.backgroundImage="url(https://swall.teahub.io/photos/small/112-1128749_thumb-image-light-green-nature-hd.jpg)"
        // document.getElementById('main').style.backgroundRepeat="no-repeat";
        {document.getElementById('main').style.backgroundImage="url(./light-back.jpg)";
        document.getElementById('text').style.color='white';
        document.getElementById('heading').style.color='white';
        document.getElementById('article-id').style.color='white';
        document.getElementById('art').style.color='white';
        document.getElementById('heading').innerHTML="New analog quantum computers to solve previously unsolvable problems";
        document.getElementById('text').innerHTML="New research published in Nature Physics by collaborating scientists from Stanford University in the U.S. and University College Dublin (UCD) in Ireland has shown that a novel type of highly-specialized analog computer, whose circuits feature quantum components, can solve problems from the cutting edge of quantum physics that were previously beyond reach. When scaled up, such devices may be able to shed light on some of the most important unsolved problems in physics.";
        document.getElementById('main').style.backgroundImage="url(./b2.jpg)";
        document.getElementById('mode').innerHTML="Next Article";
        document.getElementById('image').src="./new-analogue-quantum-c.jpg";
        document.getElementById('article-id').innerHTML="2";
        console.log("Changed to light");
        state = 2;
    }
    else{
        document.getElementById('main').style.backgroundImage="url(./dark-back.jpg)";
        document.getElementById('text').style.color='black';
        document.getElementById('heading').style.color='black';
        document.getElementById('article-id').style.color='black';
        document.getElementById('art').style.color='black';
        document.getElementById('heading').innerHTML="Predicting human group sizes with physics";
        document.getElementById('text').innerHTML="Only by knowing the average number of friends each person has, scientists at Complexity Science Hub (CSH) were able to predict the group sizes of people in a computer game. For this purpose, they modeled the formation of social groups on an example from physics, namely the self-organization of particles with spin.People interact with each other, and groups emerge very similar to particles that form colloids or polymers. Motivated by this, the research group developed a simple model for homophilic humans that is based on the mechanisms of self-organization of particles with spin.";
        document.getElementById('main').style.backgroundImage="url(./b1.avif)";
        document.getElementById('mode').innerHTML="Previous Article";
        document.getElementById('image').src="./predicting-human-group.jpg";
        document.getElementById('article-id').innerHTML="1";
        document.getElementById('')
        console.log("Changed to dark");
        state = 1;
    }
    

})