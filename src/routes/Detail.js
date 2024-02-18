import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  });
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{detail.title}</h2>
          <img src={detail.medium_cover_image} alt={detail.title} />
          <p>
            {detail.description_full !== ""
              ? detail.description_full
              : "No description"}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
