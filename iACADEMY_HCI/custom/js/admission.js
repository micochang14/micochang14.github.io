$(function() {
	$('.list-group li').click(function(e) {
		if (!$(this).hasClass('active')) {
			$(".list-group li.active").removeClass("active");
			$(this).addClass("active");
			$(".box").hide().eq($(this).index()).fadeIn();
			e.preventDefault();
		}
	});

	$('#tuition-select')
			.change(
					function() {
						var select = $(this).val();

						var cashTuitionFee, cashLabFee, cashMiscFee, cashNewStudentFee, cashTotal, instTuitionFee, instLabFee, instMiscFee, instNewStudentFee, instTotal, downpayment, firstInst, secondInst, thirdInst, fourthInst, fifthInst, schedTotal;

						switch (select) {
						case '1':
						case '2':
						case '3':
							cashTuitionFee = '36,180.00';
							cashLabFee = '6,000.00';
							cashMiscFee = '15,500.00';
							cashNewStudentFee = '2,550.00';
							cashTotal = '60,230.00';
							instTuitionFee = '39,436.20';
							instLabFee = '6,540.00';
							instMiscFee = '15,500.00';
							instNewStudentFee = '2,550.00';
							instTotal = '64,026.20';
							downpayment = '32,013.10';
							firstInst = '6,402.62';
							secondInst = '6,402.62';
							thirdInst = '6,402.62';
							fourthInst = '6,402.62';
							fifthInst = '6,402.62';
							schedTotal = '64,026.20';
							break;
						case '4':
						case '5':
							cashTuitionFee = '42,210.00';
							cashLabFee = '0';
							cashMiscFee = '15,500.00';
							cashNewStudentFee = '2,550.00';
							cashTotal = '60,260.00';

							instTuitionFee = '46,008.90';
							instLabFee = '0';
							instMiscFee = '15,500.00';
							instNewStudentFee = '2,550.00';
							instTotal = '64,058.90';

							downpayment = '32,029.45';
							firstInst = '6,405.89';
							secondInst = '6,405.89';
							thirdInst = '6,405.89';
							fourthInst = '6,405.89';
							fifthInst = '6,405.89';
							schedTotal = '64,058.90';
							break;
						case '6':
						case '7':
						case '8':
							cashTuitionFee = '42,210.00';
							cashLabFee = '5,500.00';
							cashMiscFee = '15,500.00';
							cashNewStudentFee = '2,550.00';
							cashTotal = '65,760.00';

							instTuitionFee = '46,008.90';
							instLabFee = '5,995.00';
							instMiscFee = '15,500.00';
							instNewStudentFee = '2,550.00';
							instTotal = '70,053.90';

							downpayment = '35,026.95';
							firstInst = '7,005.39';
							secondInst = '7,005.39';
							thirdInst = '7,005.39';
							fourthInst = '7,005.39';
							fifthInst = '7,005.39';
							schedTotal = '70,053.90';
							break;
						default:
							cashTuitionFee = '0';
							cashLabFee = '0';
							cashMiscFee = '0';
							cashNewStudentFee = '0';
							cashTotal = '0';
							instTuitionFee = '0';
							instLabFee = '0';
							instMiscFee = '0';
							instNewStudentFee = '0';
							instTotal = '0';
							downpayment = '0';
							firstInst = '0';
							secondInst = '0';
							thirdInst = '0';
							fourthInst = '0';
							fifthInst = '0';
							schedTotal = '0';
							break;
						}

						$('#cashTuitionFee').text(cashTuitionFee);
						$('#cashLabFee').text(cashLabFee);
						$('#cashMiscFee').text(cashMiscFee);
						$('#cashNewStudentFee').text(cashNewStudentFee);
						$('#cashTotal').text(cashTotal);

						$('#instTuitionFee').text(instTuitionFee);
						$('#instLabFee').text(instLabFee);
						$('#instMiscFee').text(instMiscFee);
						$('#instNewStudentFee').text(instNewStudentFee);
						$('#instTotal').text(instTotal);

						$('#downPayment').text(downpayment);
						$('#firstInst').text(firstInst);
						$('#secondInst').text(secondInst);
						$('#thirdInst').text(thirdInst);
						$('#fourthInst').text(fourthInst);
						$('#fifthInst').text(fifthInst);
						$('#schedTotal').text(schedTotal);
					})
})