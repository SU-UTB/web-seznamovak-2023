import '../../form.css'
import HomeButton from '../form/HomeButton'
import Header from '../form/Header'
import PostForm from './PostForm'
import Contact from './Contact'

const Turnus1 = () => {
  return (
    <>
      <div className="mainContainer">
        <HomeButton />
        <div className="formContainer">
          <Header label="1. Turnus" date="21.8. - 24.8. 2023" />
          <PostForm batch={1} />
        </div>
      </div>
      <Contact />
    </>
  )
}

export default Turnus1
