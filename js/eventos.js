var inicioApp = function()
{
	

	var Inicio = function()
	{
		$("section > article").hide();
		$("#artInicio").show();
		$("#artInicioTxt").show();
		$("#MenuResp").val("btnInicio");

	}

	var Quien = function()
	{
		$("section > article").hide();
		$("#artQuienSoy").show();
		$("#artQuienSoyTxt").show();
		$("#MenuResp").val("btnQuien");
	}

	var Primer = function()
	{
		$("section > article").hide();
		$("#artPrimer").show();
		$("#artPrimerTxt").show();
		$("#artIndice").show();
		$("#artIndiceTxt").show();
		$("#MenuResp").val("btnPrimer");

	}
	var Html = function()
	{
		$("section > article").hide();
		$("#artHtml").show();
		$("#artHtmlTxt").show();
		$("#artCss").show();
		$("#artCssTxt").show();
		$("#artCss2").show();
		$("#artCss2Txt").show();
		$("#artCss3").show();
		$("#artCss3Txt").show();
		$("#MenuResp").val("btnHtml");

	}

	var Bootstrap = function()
	{
		$("section > article").hide();
		$("#artBootstrap").show();
		$("#artBootstrapTxt").show();
		$("#MenuResp").val("btnBootstrap");

	}

	var Java = function()
	{
		$("section > article").hide();
		$("#artJava").show();
		$("#artJavaTxt").show();
		$("#MenuResp").val("btnJava");

	}
	var Php = function()
	{
		$("section > article").hide();
		$("#artPhp").show();
		$("#artPhpTxt").show();
		$("#MenuResp").val("btnPhp");

	}

	//Eventos del usuario.
	$("#btnInicio").on("click",Inicio);
	$("#btnQuien").on("click",Quien);
	$("#btnPrimer").on("click",Primer);
	$("#btnHtml").on("click",Html);
	$("#btnBootstrap").on("click",Bootstrap);
	$("#btnJava").on("click",Java);
	$("#btnPhp").on("click",Php);

	var id = $("#MenuResp").val();
	if(id=="btnInicio")
		Inicio();
	else if(id=="btnQuien")
		Quien();
	else if(id=="btnPrimer")
		Primer();
	else if(id=="btnHtml")
		Html();
	else if(id=="btnBootstrap")
		Bootstrap();
	else if(id=="btnJava")
		Java();
	else if(id=="btnPhp")
		Php();
}

$(document).on("ready",inicioApp);