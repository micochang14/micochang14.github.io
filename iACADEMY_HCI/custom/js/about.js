$("a").click(function(){
   if($(this).attr("id") == "audi") {
	   $('.modal-header h4').html("Auditorium")
	   $('.modal-body p').html( "The 400-capacity auditorium is the go-to space for most of iACADEMY’s major activities like the monthly Open House and the Foundation Week celebration. It has also been the venue for several external events such as Animahenasyon, Google Women Techmakers, and Project VOICE, featuring Sarah Kay and Phil Kaye." );
   }
   else if($(this).attr("id") == "library") {
	   $('.modal-header h4').html("Library")
	   $('.modal-body p').html( "iACADEMY’s library features a selection of books with topics ranging from the more conventional —like Marketing and Business — to the slightly more specialized —like Animation and Game Development. With floor to ceiling windows, the bright and spacious room offers a view overlooking Makati’s bustling city streets. The library also features a secondary room, which serves as a sound booth for recording and practice sessions." );		
   }
   else if($(this).attr("id") == "canteen") {
	   $('.modal-header h4').html("Canteen")
	   $('.modal-body p').html("The school cafeteria is located on the school’s roof deck, and can seat 50.");
   }
   else if($(this).attr("id") == "hive") {
	   $('.modal-header h4').html("The Hive")
	   $('.modal-body p').html("The Hive is one of the newest additions to the school’s facilities. The outdoor lounge is a place where students can relax with friends, and can also be a convenient waiting shed since it is located right beside Buendia Avenue.	");
   }
   else if($(this).attr("id") == "complab") {
	   $('.modal-header h4').html("Computer Laboratories")
	   $('.modal-body p').html("All of iACADEMY’s labs are equipped with the latest computers and software in order to provide students with the tools they need to further their skills in the field of Computing and Design.");
   }
   else if($(this).attr("id") == "cintiq") {
	   $('.modal-header h4').html("Cintiq Laboratories")
	   $('.modal-body p').html("As an official Wacom training partner, iACADEMY has a dedicated laboratory with 15 units of Cintiq computers for design students.");
   }
   else if($(this).attr("id") == "light") {
	   $('.modal-header h4').html("Lightbox Room")
	   $('.modal-body p').html("iACADEMY’s Animation program is grounded in the traditional study of art so students will fully appreciate and develop their skill in digital art. The Lightboxes allow students to do hand drawn animations from scratch.");
   }
   else if($(this).attr("id") == "fdrm") {
	   $('.modal-header h4').html("Fashion Design and Sewing Room")
	   $('.modal-body p').html("Students get access to the latest sewing equipment in the Fashion Design and Sewing Room, which has a great view of the bustling metropolis. Aside from serving as a classroom for those majoring in Fashion Design & Technology, this area is also where several Project Runway Philippines episodes were shot in partnership with ETC.");
   }
   else if($(this).attr("id") == "pres") {
	   $('.modal-header h4').html("Vanessa Tanco")
	   $('.modal-body p').html("Vanessa holds a Bachelor's degree in Legal Management from the Ateneo De Manila University and a Masters degree in Business Administration from the University of Southern California. In 2007 she entered in iACADEMY as head of the Marketing department and doubled the enrolment for that year. Since then she has been at the forefront of expanding the college by offering new courses under the School of Design and steered iACADEMY’s partnership with Project Runway Philippines, WACOM and IBM, as well as having the college awarded as an IBM Center of Excellence. She also led the creation of iACADEMY School of Continuing Education. Vanessa is currently the President and CEO of iACADEMY and vows to make iACADEMY the top design and technology school in Asia.	");
   }
   else if($(this).attr("id") == "vp") {
	   $('.modal-header h4').html("Mitch Andaya")
	   $('.modal-body p').html("Mitch began his work in the education industry as an instructor in the Electronics and Communications Engineering Department of the De La Salle University in 1985 and became the Dean of the College of Computer Studies in 1991. He has also been an integral part of various prestigious colleges around the Metro – Asia Pacific College, FEU-East Asia College, and STI. In 2013, he became the dean of The School of Computing at iACADEMY and now serves as iACADEMY’s Vice President for Academics.");
   }
   else if($(this).attr("id") == "vpF") {
	   $('.modal-header h4').html("Cyril Cunanan")
	   $('.modal-body p').html("Cyril is an alumnus of Don Bosco Technical Institute of Makati and Colegio de San Juan de Letran where he took up Accountancy and graduated with honors. He was also cited as a pre-board topnotcher by the CPAR Review School of the Philippines. Cyril is a Certified Public Accountant and served as the Finance and Administrative Head for Global Resource for Outsourced Workers, Inc. from 2003 to 2009 and spent six years as the Assistant Vice President for one of the biggest educational institutions for computer studies in the country. Bringing with him years of experience in the field of finance and business integration, Cyril joins iACADEMY as Vice President for Finance and Administration.");
   }
   else if($(this).attr("id") == "vpC") {
	   $('.modal-header h4').html("Raquel Perez")
	   $('.modal-body p').html("Raquel is a Public Administration graduate from the University of the Philippines. She obtained her Master’s degree in Public Administration major in Policy Development from the Catholic University of Korea. She began working in the Senate in 2009 under the Office of Senator Edgardo J. Angara where she headed Media Relations and Operations, which provided her rich experience in managing and promoting the Senator’s advocacies, projects, initiatives and legislative plans. She is now iACADEMY's Assistant Vice President for Corporate Communications.");
   }
   else if($(this).attr("id") == "avpS") {
	   $('.modal-header h4').html("Jake Aragon")
	   $('.modal-body p').html("Jake is a former administrator at Xavier School, where he designed student activities and learning experiences in the Philippines and in China. Having obtained his bachelor's degree in Development Economics from San Beda College - Manila and Master of Arts in Education from the Ateneo de Manila University, he has also taught graduate and undergraduate Education and Economics courses in college. Since the year 2001, he has conducted leadership, team building, creativity, and social awareness workshops for professionals and students all over the Philippines. Currently, he is the Assistant Vice President for Student Affairs and Services at iACADEMY.");
   }
   else if($(this).attr("id") == "design") {
	   $('.modal-header h4').html("Ryan Abeledo")
	   $('.modal-body p').html("Ryan is an award-winning multimedia artist, filmmaker, and educator. He is a recipient of several distinctions and grants from the national government, including the National Commission for Culture and the Arts (NCCA), Research Grant, Commission on Higher Education (CHED), Venue Grant, Cultural Center of the Philippines (CCP), and 21st Gawad CCP for Alternative Film and Video. A product of the UP Film Institute and College of Fine Arts, his artworks and short films have been shown both locally and internationally, with his most recent project selected as a finalist in the 2015 Manhattan International Film Festival in New York City. He was appointed Chairperson of iACADEMY’s Multimedia Arts Department in 2011, and is currently the Head of the iACADEMY School of Design.");
   }
   else if($(this).attr("id") == "business") {
	   $('.modal-header h4').html("Lucky Malveda")
	   $('.modal-body p').html("Lucky is a former consultant at the Asian Development Bank and World Bank. He has obtained a number of academic units for his Ph.D. degree in Economics from the Ateneo de Manila University. In 2007, he worked as a Senior Economist in the Department of Finance (DOF) under the leadership of Secretary Margarito Teves where his work focused on research and fiscal policymaking. While with DOF, Lucky was part-time teaching both in the undergraduate and graduate level of the School of Economics of DLSU and San Beda College-Manila. His professional experience as an Economist was further enhanced when he joined the investment arm of the Bank of the Philippine Islands and completed its Bank Officers Development Program in 2009. As an academician, he was awarded as an Outstanding Teacher in 2006 and he is currently the Dean of the School of Business at iACADEMY.");
   }
   else if($(this).attr("id") == "ijma") {
	   $('.modal-header h4').html("iACADEMY Junior Marketing Association")
	   $('.modal-body p').html("iJMA is comprised of committed Business Administration students who aim to spread knowledge and skills in the marketing profession through relevant programs and activities.");
   }
   else if($(this).attr("id") == "aegis") {
	   $('.modal-header h4').html("AEGIS")
	   $('.modal-body p').html("AEGIS envisions a healthy and enjoyable environment for all its members to help them discover, learn, and develop many of the broad skill sets necessary in Game Development.");
   }
   else if($(this).attr("id") == "seal") {
	   $('.modal-header h4').html("Software Engineering Through Academics and Leadership")
	   $('.modal-body p').html("SEAL is dedicated to the promotion of Software Engineering and development of future engineers by organizing responsive projects and events.");
   }
   else if($(this).attr("id") == "pikzel") {
	   $('.modal-header h4').html("PIKZEL")
	   $('.modal-body p').html("Pikzel represents the student body's graphic design community and promotes students' interest, talents and skills in graphic design - be it traditional or digital.");
   }
   else if($(this).attr("id") == "moda") {
	   $('.modal-header h4').html("MODA")
	   $('.modal-body p').html("MODA aims to uphold, enhance, and expand the learning of students particularly in the field of fashion design that will help them become pioneers in the industry.");
   }
   else if($(this).attr("id") == "cs") {
	   $('.modal-header h4').html("Creative Society")
	   $('.modal-body p').html("Creative Society aims to find and realize the hidden talents and creative skills of its members. It also reaches out not just to Animation Students but to others as well.");
   }
   else if($(this).attr("id") == "athletics") {
	   $('.modal-header h4').html("Athletics Organization")
	   $('.modal-body p').html("Athletics Org. is an organization that promotes health and wellness through sports and other outdoor activities. It also aims to develop sportmanship, camaraderie, and teamwork among iACADEMY students.");
   }
   else if($(this).attr("id") == "music") {
	   $('.modal-header h4').html("Music Organization")
	   $('.modal-body p').html("Music Org. recognizes individuals with talents in music. It aims to enhance the musical, recreational, social and cultural environment of iACADEMY.");
   }
   else if($(this).attr("id") == "optics") {
	   $('.modal-header h4').html("OPTICS")
	   $('.modal-body p').html("OPTICS involves the lens and the camera as a medium of forming an art which light captures aesthetics in the propety of light.");
   }
   else if($(this).attr("id") == "rythm") {
	   $('.modal-header h4').html("Rythm")
	   $('.modal-body p').html("Rhythm is dedicated to the preservation, study, teaching, and enjoyment of Western and Filipino traditional and historical dance.");
   }
   else if($(this).attr("id") == "cine") {
	   $('.modal-header h4').html("Cinephilia")
	   $('.modal-body p').html("Cinephilia aims to stimulate students interest in short film making and to utilize their interest in promotion of values and morals.");
   }
   else if($(this).attr("id") == "act") {
	   $('.modal-header h4').html("iACT")
	   $('.modal-body p').html("iACT is a theater guild that focuses on the art of theater and stage management.");
   }
   else if($(this).attr("id") == "cso") {
	   $('.modal-header h4').html("Central Student Organization")
	   $('.modal-body p').html("The CSO shall be the sole, unified, autonomous and democratic representative body of the students of iACADEMY. The prime duty of the CSO is to protect and defend the students rights as embodied in the Magna Carta of students and to organize relevant student development activities.");
   }
   else if($(this).attr("id") == "icon") {
	   $('.modal-header h4').html("iACADEMY Collegiate Organization for News")
	   $('.modal-body p').html("iCON is the official student publication of iACADEMY. It provides the iACADEMY community with news that shall serve as an agent of change, accountability, fairness, and responsive within the institution.");
   }
});