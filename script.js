const ElementoHTML = document.querySelector("html");
const ElementosBotoesPomodoro = document.querySelectorAll(".app__card-button");

ElementosBotoesPomodoro.forEach((lElementoBotaoPomodoro) =>{
    lElementoBotaoPomodoro.addEventListener("click", () => {
        DesativarTodosOsBotoesPomodoro();
        lElementoBotaoPomodoro.classList.add("active");
        
        let lContextoDoBotao = "foco";
        if (lElementoBotaoPomodoro.getAttribute("data-contexto") === "short")
            lContextoDoBotao = "descanso-curto";
        else if (lElementoBotaoPomodoro.getAttribute("data-contexto") === "long")
            lContextoDoBotao = "descanso-longo";
        ElementoHTML.setAttribute("data-contexto", lContextoDoBotao);
    });
});

function DesativarTodosOsBotoesPomodoro(){
    ElementosBotoesPomodoro.forEach((lElementoBotaoPomodoro) =>{
        lElementoBotaoPomodoro.classList.remove("active");
    });   
}
