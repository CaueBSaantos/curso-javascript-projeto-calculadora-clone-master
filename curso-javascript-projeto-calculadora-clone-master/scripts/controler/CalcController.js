class CalcController {
    constructor() {
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime()
        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000);

    }

    /* aqui estamos crinado um metodo para eventos que esta no initButtonsEvents */
    addEventListenerAll(elements, events, fn) {
        events.split(' ').forEach(event => {
            elements.addEventListener(event, fn, false)
        })

    }

    clearAll() {
        this._operation = [];
    }

    ClearEntry(value) {
        this._operation.pop(value)
    }

    addOperation(value) {
        this._operation.push(value)
        console.log(this._operation)
    }

    setError() {
        this.displayCalc = "Error"
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.ClearEntry();
                break;

            case 'soma':
                break

            case 'subtracao':
                break

            case 'divisao':
                break

            case 'multiplicacao':
                break

            case 'porcentagem':
                break

            case 'igual':
                break

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value))

                break


            default:
                this.setError();
                break;
        }


    }


    /* aqui estamos pegando os IDs: BUTTONS e PARTS, cada CLASS dentro deles: g-btn, adicionando os mesmos eventos: CLICK,DRAG 
     para cada um das classes finalizando com o evento dentro do console. */
    initButtonsEvents() {

        let buttons = document.querySelectorAll('#buttons > g, #parts >g');

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {



                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);

            });


            this.addEventListenerAll(btn, 'mouseover mouseup mouserdown', e => {

                btn.style.cursor = "pointer"
            })

        });

    }



    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
    }




    get displayDate() {
        return this._dateEl.innerHTML
    }
    set displayDate(value) {
        this._dateEl.innerHTML = value
    }


    get displayTime() {
        return this._timeEl.innerHTML
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value
    }


    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(valor) {
        this._displayCalcEl.innerHTML = valor;
    }


    get currentDate() {
        return new Date;
    }
    set currentDate(valor) {
        this.this_currentDate = valor;
    }

}
