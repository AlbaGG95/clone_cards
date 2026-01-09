import './App.css';
import Testimonio from './components/Testimonio.jsx';
import './styles/Testimonio.css'
function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='Emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />
      <Testimonio
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='Shawn'
        cargo='Ingeniera de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo adquirí la confianza de poder programar gracias a las cientos de horas de clases gratuitas de freeCodeCamp. En un año, conseguí un trabajo de seis cifras como ingeniero de software. freeCodeCamp me cambió la vida.'
        />
        <Testimonio
        nombre='Sarah Chima'
		    pais='Nigeria'
        imagen='Sarah'
        cargo='Ingeniero de software'
        empresa='ChatDesk'
        testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. Su plan de estudios bien estructurado me permitió pasar de un nivel principiante a un nivel de mucha confianza en la programación. Era todo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble.'
        />
        </div>
  )
}

export default App;