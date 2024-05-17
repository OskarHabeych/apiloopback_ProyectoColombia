from flask import Flask, request  #Importamos Flask que es una librería para crear Apis parecida a "express"
import json
from twilio.rest import Client
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

#Creamos objeto Flask, el cual es el que va a crear nuestros serivicios Web
app = Flask(__name__)

#Cargamos la informacion de nuestro archivo config.json
f = open("config.json", "r")
env = json.loads(f.read())

#Creamos nuestro primer servicio web en lenguaje Python con Flask
@app.route('/test', methods=['GET'])
def test():
    return "hello world"

#Envio de SMS
@app.route('/send_sms', methods=['POST']) # el servicio se llama '/send_sms', osea el endpoint será '/send_sms' y se manejará por el método "POST"
def send_sms():
    try:
        #Acá capturo las variables de la configuración
        account_sid = env['TWILIO_ACCOUNT_SID']
        auth_token = env['TWILIO_AUTH_TOKEN']
        origen = env['TWILIO_PHONE_NUMBER']
        #Se crea el mensaje de texto
        client = Client(account_sid, auth_token)
        data = request.json  # El "request.json" captura la información del envío
        contenido = data["contenido"]
        destino = data["destino"]
        #Acá se crea el mensaje y se envía
        message = client.messages.create(
                            body=contenido,
                            from_=origen,
                            to='+57' + destino
                        )
        print(message)
        return "send success"
    except Exception as e:
        print(e)
        return "error"

@app.route('/send_email', methods=['POST'])
def send_email():
    #Capturamos la info de la soicitud 
    data = request.json
    contenido = data["contenido"]
    destino = data["destino"]
    asunto = data["asunto"]
    print(contenido, destino, asunto)

    #Creo el mensaje de correo electrónico
    message = Mail(
    from_email= env['SENDGRID_FROM_EMAIL'],
    to_emails= destino,  # "to_emails= ["habeysanoi@gmail.com", "oskhs@hotmail.com]," esto es para enviar el mensaje a varios correos personalizados, directamente se puede enviar también a varios destinos poniéndolos en el simulador postman
    subject= asunto,
    html_content= contenido)
    try:
        sg = SendGridAPIClient(env['SENDGRID_API_KEY'])
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return "send success"
    except Exception as e:
        print(e)
        return "error"


#Ejecutamos el servidor
if __name__ == '__main__':
    app.run()
