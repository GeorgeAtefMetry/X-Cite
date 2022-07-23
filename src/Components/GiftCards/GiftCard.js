import { Link } from "react-router-dom";
import "./GiftCard.css";
// import fb from '../firebase'

const GiftCard = () => {
  return (
    <>
      <div class="container-fluid">
        <h2 class="m container-fluid text-center ">Gift Cards Zone</h2>
        <h4 class="h">App Stores</h4>
        <div className="row ">
          <div
            class="col-6 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <Link to={`/ITunesCard`}>
              <img
                className="card-img-top"
                src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FiTunes.png?alt=media&token=99ef1a60-31c3-449a-8245-7f1206b43167"
                alt="Title"
              />
            </Link>
          </div>

          <div
            class="col-6 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <Link to={`/GooglePlayCards`}>
              <img
                className="card-img-top"
                src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2F15052022-GCardsLogos-GooglePlay.png?alt=media&token=2f3f6ee9-7cca-4392-8861-c68be4ac287a"
                alt="Title"
              />
            </Link>
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Audio Streaming</h4>
        <div className="row ">
          <div
            class="col-6 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FSporify.png?alt=media&token=6ca5e2b3-635e-483a-b2da-6320e6efbcaa"
              alt="Title"
            />
          </div>

          <div
            class="col-6 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FAnghami.png?alt=media&token=fa1ad66b-a9da-444e-ab9a-c81a090e4f6e"
              alt="Title"
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Gaming</h4>
        <div className="row ">
          <div
            class="col-md-3 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fplaystation.png?alt=media&token=7ded95be-ab08-4570-bead-95303ac7f1b6"
              alt="Title"
            />
          </div>

          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FXbox.png?alt=media&token=702f3d9d-4182-4237-866f-a87b41343b8d"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fpubg.png?alt=media&token=c93d71f8-2876-46ef-b443-406320e2f7e4"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fsteam.png?alt=media&token=90e9a0de-346a-44e6-8123-c03d56f2048c"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Flegands.png?alt=media&token=7a38055f-47fb-426b-8066-8f7b0b6ea6b0"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fneon.png?alt=media&token=4df4e6ff-dec6-40b2-bda6-3688ab6678f7"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fonline.png?alt=media&token=56ffc18a-e4c0-4940-9a52-ff0839cf93f2"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fgold.png?alt=media&token=8e1772aa-f56a-4c8f-a5fd-09b7c67703a9"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fwarcraft.png?alt=media&token=de73a3c8-1430-4073-a1b6-6483cd90438d"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FApex.png?alt=media&token=afa44ed1-f59e-4c29-ac28-316269f7cc0d"
              alt="Title"
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Mobile Recharge</h4>
        <div className="row ">
          <div
            class="col-md-3 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Ffriendi-12.png?alt=media&token=2346806b-fcd4-4447-963c-8d192f429d90"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Flebra.png?alt=media&token=c110600a-3645-43e3-8140-e43b982d2a76"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fmobily.png?alt=media&token=ea63b6a7-3cc0-402a-8c8d-d0215eec697d"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fvirgin.png?alt=media&token=0d53c61e-be0f-49f4-9550-f40c28b1b822"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fzain.png?alt=media&token=5e3f6d12-e7fb-415f-82c6-1ec55e5e2466"
              alt="Title"
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Video Streaming</h4>
        <div className="row ">
          <div
            class="col-md-3 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FNetflix2.png?alt=media&token=93ff79d8-6644-454e-a6b1-3ca50fe227fa"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FstarzPlay.png?alt=media&token=1661b110-d8d7-49e0-8d2d-63c03b8b430f"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2FShahid.png?alt=media&token=4e7a1819-7da1-4610-8291-74712c56d601"
              alt="Title"
            />
          </div>
          <div
            class="col-md-3  card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Focbs.png?alt=media&token=eb37bcf9-887b-4f9f-a413-a3abad7ba721"
              alt="Title"
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Shopping</h4>
        <div className="row ">
          <div
            class="col-md-12 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Famazon-.png?alt=media&token=cbe9d2fe-78f5-485b-ad53-6b81cfbddaa6"
              alt="Title"
            />
          </div>
        </div>
        {/* /////////////////////////////////////////////////// */}

        <h4 class="h">Software</h4>
        <div className="row ">
          <div
            class="col-md-4 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fmcfcee.png?alt=media&token=83254d6a-d7f0-4681-a9e9-9577f58afa17"
              alt="Title"
            />
          </div>
          <div
            class="col-md-4 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fmicrosoft.png?alt=media&token=3574b395-36f3-4004-bb7a-9e1e699f6d0d"
              alt="Title"
            />
          </div>
          <div
            class="col-md-4 card text-muted my-4 shadow "
            style={{ width: "20rem" }}
          >
            <img
              className="card-img-top"
              src="https://firebasestorage.googleapis.com/v0/b/x-cite-5d269.appspot.com/o/Gift%20Cards%2Fwindows.png?alt=media&token=40e945b9-6962-4352-b84a-a2b39ad560de"
              alt="Title"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCard;
