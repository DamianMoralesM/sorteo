        
      /* Get values from the DOM */  
      pickData = function(){
        // collect data

		// imagen
		let imagen =	$('.selected')[0].id;

		// duracion
		let duracion= $("input[name='duracion']:checked").val()

		// categoriaProd
		let categoriaProd = $("input[name='categoriaProd']").val()

		// nombreProd
		let nombreProd = $("input[name='nombreProd']").val()

		// fecha  Apertura
		let fechaA = $("input[name='fechaApertura']").val()

		//fecha Cierre 

		let  fechaC =  $("input[name='fechaCierre']").val()

		// condiciones
		let condiciones = []
		const cantCondiciones = $("input[name='condicion']").length;
		for(let i=0;i< cantCondiciones; i++ ){ 

			condiciones.push($("input[name='condicion']")[i].value)
			
        }

        console.log( {imagen,duracion,fechaA, fechaC,nombreProd,categoriaProd,condiciones} )

        
    }