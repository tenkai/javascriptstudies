# JavaScript Interview Question
===
1. Look at the following code. What does it do? What happens if you click on the li elements?
2. Establish what happens when you click on the li elements. Can you guess? Ask the interviewee to explain why this happens.
3. Ask how the code can be fixed so that clicking on each element outputs an alert corresponding to its order in the list (the desired behavior)

This simple exercise covers a lot of bases in evaluating someone’s JavaScript understanding in a short period of time. What do people think? What are good followup questions?


	<html>
		<body>
			<ul>
				<li>First</li>
				<li>Second</li>
				<li>Third</li>
				<li>Fourth</li>
			</ul>
		</body>

		<script type="text/javascript">
			els = document.getElementsByTagName('li');
			for(i=0; i < els.length; i++){
			els[i].addEventListener('click', function(){alert(i);}, false);
		}
		</script>
	</html>
	
	
	
1. document.getElementsByTagName takes all li tags (First,Scond,Third,Fourth) and reads them into an array (els)
2. the array is iterated over 
	3. Each iteration is waiting for a click,
	4. when a click is recieved, it will alert the user with the array element i
	5. it will go to the next element
	
	THIS ANSWER WAS INCORRECT
====

The alert was 4 when clicking on each item, I think the reason this is happening is because the script element runs through the whole loop instantly when the page is loaded, then i is 4 thereafter

Here is how to produce the expected result:

	<html>
	   <body>
	     <ul>
	       <li>First</li>
	       <li>Second</li>
	       <li>Third</li>
	       <li>Fourth</li>
	     </ul>
	   </body>
	   <script type="text/javascript">
	     els = document.getElementsByTagName('li');
	     els[0].addEventListener('click', function(){alert(1);}, false);
	     els[1].addEventListener('click', function(){alert(2);}, false);
	     els[2].addEventListener('click', function(){alert(3);}, false);
	     els[3].addEventListener('click', function(){alert(4);}, false);
	   </script>
	 </html>


----



 
