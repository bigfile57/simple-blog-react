
import "../../css/wrapbox.css";
import "../../css/view.css"
import profile from '../../assets/profile.jpg'
import { useNavigate } from "react-router-dom";
function PostViewContent() {
  const navigate = useNavigate();
  return (
    <div className="view">
      <div className="max-width">
        <section class="wrap-box">
          <div class="inner">
            <dl class="author-wrap">
              <dt class="a11y-hidden">Author</dt>
              <dd class="author">
                <img src={profile} alt="" /> Chilli
              </dd>
              <dt class="a11y-hidden">Created</dt>
              <dd class="created">2022.05.25</dd>
            </dl>
            <dl class="category">
              <dt class="a11y-hidden">Category</dt>
              <dd>Life</dd>
              <dd>Style</dd>
            </dl>
            <div class="title-wrap">
              <h2>Lorem, ipsum dolor sit amet<br/>consectetur adipisicing elit.</h2>
              <button class="btn-like">Like</button>
            </div>
            <hr />
            <div class="view-contents">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel.
              </p>
              <img src="./images/post-background6.jpg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore illum nostrum perferendis voluptas, voluptate soluta
                corrupti dolore quidem. Placeat, eaque! Exercitationem est
                facilis dolor quas odio cum incidunt repudiandae vel. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Inventore
                illum nostrum perferendis voluptas, voluptate soluta corrupti
                dolore quidem. Placeat, eaque! Exercitationem est facilis dolor
                quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Inventore illum nostrum
                perferendis voluptas, voluptate soluta corrupti dolore quidem.
                Placeat, eaque! Exercitationem est facilis dolor quas odio cum
                incidunt repudiandae vel.
              </p>
            </div>
            <div class="btn-group">
              <a href="#" class="btn-modify">
                <span class="a11y-hidden">modify</span>
              </a>
              <button type="button" class="btn-delete">
                <span class="a11y-hidden">delete</span>
              </button>
            </div>
            <div class="btn-back" onClick={()=>{navigate(-1)}}  >
              <span class="a11y-hidden">Back</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PostViewContent;
