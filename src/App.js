import './App.css'
import $ from "jquery"
import React, { useRef, useState, useEffect } from 'react'

function App() {

$(() => {
  
})
  
  const chapter = [{audioAns: ["https://cfpvd.s3.ca-central-1.amazonaws.com/formation/1-1.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/1-2.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/1-3.mp3"], audioQuestion: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/1-0.wav", question: "Quel aurait été la meilleure attitude à adopter lors de la réunion du début de quart de travail?", audio: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/paragraphe+1.wav", url: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch1-1.mp4', urlMuted: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch1-2.mp4', choice1: 'Souhaitant clarifier ses incompréhensions rapidement, il intervient immédiatement dans le groupe afin de demander des précisions.', choice2: "À la sortie, il demande au superviseur quel serait le bon moment pour lui parler avant d’effectuer la tâche. Le superviseur lui dit qu’il passera le voir rapidement. Il lui posera alors ses questions.", choice3: 'Il attend que la rencontre se termine, afin de valider les informations avec le superviseur lorsque tout le monde se dirige vers leur tâche à accomplir.', text: ["• Assurer votre sécurité et celle de vos collègues", "• Poser des questions", "• Choisir le bon moment", "• Favoriser le dialogue"], ansId:"2"},
                  {audioAns: ["https://cfpvd.s3.ca-central-1.amazonaws.com/formation/2-1.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/2-2.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/2-3.mp3"], audioQuestion: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/2-0.mp3", question: "Quel aurait été le meilleur comportement à adopter pour cette situation?", audio: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/paragraphe+2.wav", url: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch2-1V2.mp4', urlMuted: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch2-2.mp4', choice1: 'Incertain, il demande à son collègue qu’il détaille sa méthode et la raison qui le motive à l’utiliser. Une fois les instructions reçues, il partage l’opinion de son collègue et décide donc de procéder selon cette méthode qu’ils considèrent tous les deux comme efficace et sécuritaire.', choice2: 'Après avoir demandé des précisions à son collègue et avoir fait la lecture de la fiche de cadenassage, il choisit de faire un compromis entre les deux méthodes. Il considère que prendre le meilleur des deux solutions lui garantira un bon résultat.', choice3: 'Ne pas écouter son collègue, prendre la fiche de cadenassage et appliquer la procédure indiquée dans le règlement.', text: ["• Exercer son jugement", "• Écouter son collègue tout en conservant un esprit critique", "• Collaborer pour trouver la solution la plus sécuritaire", "• Valider auprès de son superviseur"], ansId:"3"},
                  {audioAns: ["https://cfpvd.s3.ca-central-1.amazonaws.com/formation/3-1.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/3-2.mp3", "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/3-3.mp3"], audioQuestion: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/3-0.mp3", question: "Qu'est que Jeff aurait pu faire pour éviter que son collègue se blesse?", audio: "https://cfpvd.s3.ca-central-1.amazonaws.com/formation/paragraphe+3.wav", url: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch3-1.mp4', urlMuted: 'https://cfpvd.s3.ca-central-1.amazonaws.com/formation/Ch3-2.mp4', choice1: 'Nouveau en poste, il ne se sent pas à l’aise d’intervenir. Sans aviser son collègue de la situation à risque, il avise rapidement son superviseur avant que son collègue vive une situation potentiellement dangereuse.', choice2: 'Il intervient rapidement auprès de son collègue et lui demande d’arrêter sa tâche immédiatement. Il avise son collègue que la situation est dangereuse en expliquant les risques d’un tel problème.', choice3: 'Il avise son collègue du risque d’utiliser une meuleuse portative en lui indiquant qu’il ne voudrait pas que quelque chose de malheureux arrive.', text: ["• Signaler le danger", "• Sensibiliser sur les conséquences", "• Favoriser le dialogue", "• Aviser son superviseur en cas d’échec"], ansId:"2"}]

  const selection = [{1: "Demander des précisions pendant la réunion préparatoire.", 2: "Demander au superviseur de venir le voir rapidement pour des précisions.", 3: "Demander des renseignements au superviseur juste après la réunion préparatoire.", 4: 'Pas tout à fait...', 5: 'Bon choix!', 6: 'Pas tout à fait...'},
                    {1: "Considérer l’expérience de son collègue et suivre ses directives même si elles sont contraires à la procédure.", 2: "Prendre le meilleur des deux options.", 3: "Appliquer la procédure indiquée dans le règlement.", 4: 'Pas la bonne réponse...', 5: 'Pas tout à fait...', 6: 'Bon choix!'},
                    {1: "Aviser son superviseur sans prévenir le collègue.", 2: "Aviser son collègue et expliquer pourquoi c’est une situation à risque.", 3: "Aviser son collègue.", 4: 'Pas tout à fait...', 5: 'Bon choix!', 6: 'Presque!'}]

  const [url, setUrl] = useState(null)
  const [audio, setAudio] = useState(null)
  const [id, setId] = useState(0)
  const [ansid, setAnsid] = useState('1')
  const [retroid, setRetroid] = useState('4')
  const [audioAns, setAudioAns] = useState('')
  const [canPlayAns, setCanPlayAns] = useState(false)
  const [blured, setBlured] = useState([0,0,0])

  useEffect(() => {
    if(url !== null){
      vidRef.current.play()
    }
  }, [url])

  useEffect(() => {
    if(audioAns !== ""){
    audioAnsRef.current.pause()
    audioAnsRef.current.play()
    }
  }, [audioAns])

  useEffect(() => {
    $("#card2").removeClass("blur")
    $("#card3").removeClass("blur")
    if(blured[0] === 0) 
    {
      $("#card2").addClass("blur")
    }
    if(blured[1] === 0) 
    {
      $("#card3").addClass("blur")
    }
    if(blured[0] === 1) 
    {
      $("#check1").css({display: "block"})
    }
    if(blured[1] === 1) 
    {
      $("#check2").css({display: "block"})
    }
    if(blured[2] === 1) 
    {
      $("#check3").css({display: "block"})
    }
  }, [blured])

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange)
      }
    }, [])

  const isMobile = width <= 768;

  const vidRef = useRef(null)
  const audioRef = useRef(null)
  const audioQuestionRef = useRef(null)
  const audioAnsRef = useRef(null)

  const startvideo = (id) => {
    $("#video").css({display: "block"})
    $("#accueil").css({display: "none"})
    setId(id)
    setUrl(chapter[id].url)
    setAudio(chapter[id].audio)
  }

  const showQuestions = () => {
    $("#selector").css({display: "flex"})
    $("#response").css({display: "none"})
    audioQuestionRef.current.play()
  }

  const goBack = () => {
    $("#video").css({display: "flex"})
    $("#response").css({display: "none"})
    $("#retry").css({display: "none"})
    $("#retour").css({display: "none"})
    audioQuestionRef.current.play()
  }


  const validate = (ans, retro) => {
    $("#video").css({display: "none"})
    $("#response").css({display: "flex"})
    $(".selectBtn").css('pointer-events','none')
    setAnsid(ans)
    setRetroid(retro)
    audioRef.current.play()
    audioAnsRef.current.pause()
    setCanPlayAns(false)
    
  }

  const retour = () => {
    $("#response").css({display: "none"})
    $("#selector").css({display: "none"})
    $("#retour").css({display: 'none'})
    $("#retry").css({display: 'none'})
    if (id === 2){
      $("#outro").css({display: "flex"})
    }
    else {
      $("#accueil").css({display: "block"})
    }
    if (id === 0){
    setBlured([1,0,0])
    }
    if (id === 1){
      setBlured([1,1,0])
    }
    if (id === 2){
      setBlured([1,1,1])
    }
  }

  const showBtn = () => {
    if (ansid === chapter[id].ansId)
      {
        $("#retour").css({display: 'block'})
      }
      else 
      {
        $("#retry").css({display: 'block'})
      }
  }

  const canHover = () => {
    setCanPlayAns(true)
    $(".selectBtn").css('pointer-events','all')

  }

  const playAnsAudio = (ids) => {
    if(canPlayAns){
      if(!isMobile){
        setAudioAns(chapter[id].audioAns[ids])
      }
    }
  }

  const showChapters = () => {
    $("#intro").css({display: "none"})
    $("#accueil").css({display: "block"})
  }

  const reload = () => {
    $("#outro").css({display: 'none'})
    $("#accueil").css({display: "block"})
  }

  $('#vid').attr('disablePictureInPicture', 'true');
  
  return (
    <div className="App" id='app'>
      <audio ref={audioRef} src={audio} onEnded={() => showBtn()} />
      <audio ref={audioQuestionRef} src={chapter[id].audioQuestion} onEnded={() => canHover()} />
      <audio ref={audioAnsRef} src={audioAns} />
      <div id="outro">
        <img alt="" className="accueil-bg" src='/bg.jpg' />
        <h1 className="title-font">Fin</h1>
        <div className="outro-text">
          <div className='out-text'>Merci d’avoir aidé Jeff à faire les bons choix! En résumé : </div>
          <div className='point'>⦁	Ne pas craindre de déranger pour poser une question ou de demander une information</div>
          <div className='point'>⦁	Respecter les règles et les procédures en place</div>
          <div className='point'>⦁	En cas de doute, ne pas hésiter à consulter son superviseur</div>
          <div className='point'>⦁	Nous sommes responsables de notre santé et de notre sécurité ainsi que celles de nos collègues</div>
          <div className='out-text'>Maintenant, c’est à votre tour de faire des choix sécuritaires dans votre travail, et ce, à tous les jours sans exception!</div> 
        </div>
        <button className='start-btn' onClick={() => reload()}>Retour</button>
      </div>
      <div id="intro">
        <img alt="" className="accueil-bg" src='/bg.jpg' />
        <h1 className="title-font">Avant de commencer</h1>
        <div className="intro-text">
          En tant que nouveau travailleur ou travailleur expérimenté du secteur minier, cette formation interactive vous permettra de naviguer dans diverses situations de travail.<br></br><br></br>  
          Vous suivrez Jeff, qui a fait une réorientation de carrière après avoir complété son cours. C’est aujourd’hui le grand jour, il débute dans l’industrie. Voulant bien faire les choses, il veut être un bon travailleur et ne veut pas nuire à ses collègues. Aidez Jeff à faire les bons choix pour sa première journée de travail.<br></br><br></br>  
          Tout au long de cette journée, Jeff sera confronté à diverses situations.<br></br><br></br>  
          Vous devrez identifier les meilleurs choix afin d’assurer la santé et la sécurité de Jeff et de ses collègues de travail.<br></br><br></br>  
        </div>
        <button className='start-btn' onClick={() => showChapters()}>Commencer</button>
      </div>
      <div id="accueil">
        <img alt="" className="accueil-bg" src='/bg.jpg' />
        <h1 className="main-title">Les choix de Jeff lors de sa<br></br>première journée de travail</h1>
        <div className='btn-container'>
          <div className='card' id="card1">
            <button className="btn" onClick={() => startvideo(0)}>
              <img alt="" className='check' id="check1" src="./check.png" />
              <img alt="pic" className="btn-pic" src='https://cfpvd.s3.ca-central-1.amazonaws.com/formation/frame1.png' />
            </button>
            <h2 className="btn-title">Chapitre 1</h2>
            <p className="btn-subtitle">Le briefing</p>
          </div>
          <div className='card' id="card2">
            <button className="btn" onClick={() => startvideo(1)}>
              <img alt="" className='check' id="check2" src="./check.png" />
              <img alt="pic" className="btn-pic" src='https://cfpvd.s3.ca-central-1.amazonaws.com/formation/frame2.jpg' />
            </button>
            <h2 className="btn-title">Chapitre 2</h2>
            <p className="btn-subtitle">Le cadenassage</p>
          </div>
          <div className='card' id="card3">
            <button className="btn" onClick={() => startvideo(2)}>
              <img alt="" className='check' id="check3" src="./check.png" />
              <img  alt="pic" className="btn-pic" src='https://cfpvd.s3.ca-central-1.amazonaws.com/formation/frame3.jpg' />
            </button>
            <h2 className="btn-title">Chapitre 3</h2>
            <p className="btn-subtitle">Comportement dangereux</p>
          </div>
        </div>
      </div>
      <div id="video">
        <video src={url} ref={vidRef} id="vid" onEnded={showQuestions} controls controlsList="nofullscreen nodownload noplaybackrate" />
        <div id="selector">
          <div className="select-title">{chapter[id].question}</div>
          <button className="selectBtn" onMouseOver={() => playAnsAudio(0)} onClick={() => validate('1','4')}>{chapter[id].choice1}</button>
          <button className="selectBtn" onMouseOver={() => playAnsAudio(1)} onClick={() => validate('2','5')}>{chapter[id].choice2}</button>
          <button className="selectBtn" onMouseOver={() => playAnsAudio(2)} onClick={() => validate('3','6')}>{chapter[id].choice3}</button>
        </div>
      </div>
      <div id="response">
        <div className="res-container">
          <div className="info">
            <div className={ansid === chapter[id].ansId ? "retro-subtitle-green" : "retro-subtitle"}>{selection[id][retroid]}</div>
            <div className="info-title">{selection[id][ansid]}</div>
            <img alt="" className='img-ans' src={ansid === chapter[id].ansId ? "./check.png" : "./x.png"} />
          </div>
          <div className='video-retro-container'>
            <video src={chapter[id].urlMuted} autoPlay muted loop />
            <div className='key-el'>
              <div className="para">Les éléments clés :</div>
              <div className="para-list">{chapter[id].text[0] === undefined ? "" : chapter[id].text[0]}</div>
              <div className="para-list">{chapter[id].text[1] === undefined ? "" : chapter[id].text[1]}</div>
              <div className="para-list">{chapter[id].text[2] === undefined ? "" : chapter[id].text[2]}</div>
              <div className="para-list">{chapter[id].text[3] === undefined ? "" : chapter[id].text[3]}</div>
            </div>
          </div>
        </div>
        <div className='resetBtnContainers'>
            <button id="retour" className='retour' onClick={() => retour()}>Continuer</button>
            <button id="retry"  className='retour' onClick={() => goBack()}>Réessayer</button>
        </div>
      </div>
    </div>
  )
}

export default App
