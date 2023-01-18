import Layout from "../../components/Layout";
import Head from "next/head";
import styles from "../../styles/stylepage/anime";

const anime = ({ info }) => {
  const date = new Date(info.aired.from).toDateString();

  return (
    <>
      <Head>
        <title>Gutaku-Info</title>
      </Head>
      <Layout>
        <section>
          <article>
            <img src={info.images.webp.image_url} alt={info.title} />
            <div className="infotext">
              <h3>{info.title}</h3>
              <p>{info.synopsis}</p>
              <p>Date: {date}</p>
              <div className="genres">
                <p className="genres-p">Genres:</p>
                <div className="listgenres">
                  {info.genres.map((el) => (
                    <p key={el.mal_id} className="item-genre">
                      {el.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
          {info.trailer.embed_url && (
            <iframe
              width="560"
              height="443"
              src={info.trailer.embed_url}
              title={info.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </section>
      </Layout>
      <style jsx>{styles}</style>
    </>
  );
};

export default anime;

export async function getServerSideProps(context) {
  const { query } = context;
  const { anime } = query;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
  const info = await res.json();

  return {
    props: { info: info.data },
  };
}
