import Layout from "../../components/Layout";
import { colors } from "../../styles/theme";
import Head from "next/head";

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
            <img src={info.image_url} alt={info.title} />
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
          {info.trailer_url && (
            <iframe
              width="560"
              height="443"
              src={info.trailer_url}
              title={info.title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </section>
      </Layout>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          width: 70%;
          margin: auto;
          margin-bottom: 1.875rem;
          margin-top: 8rem;
        }

        article {
          display: flex;
          flex-direction: row;
          align-items: center;
          color: ${colors.white};
        }

        img {
          width: 17.5rem;
          height: 25rem;
        }

        p {
          text-align: justify;
        }

        h3 {
          font-size: 1.875em;
        }

        .infotext {
          margin-left: 3.125em;
        }

        .genres {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .genres-p {
          margin-right: 0.625em;
        }
        .listgenres {
          display: flex;
          flex-direction: row;
          white-space: nowrap;
        }
        .item-genre {
          margin-right: 0.625em;
          background: ${colors.primary});
          padding: 0.3125em;
          border-radius: 0.625em;
        }
        .item-genre:hover {
          background: ${colors.secondary};
          cursor: pointer;
          transition: all 0.5s;
        }

        iframe{
          margin-top: 3.125rem;
          width: 100%;
        }

        @media(max-width: 770px){
          section{
            font-size: 12px;
          }
          article{
            width: 100%
          }

          img{
            width: 13rem;
            height: 20rem;
          }

          .infotext {
          width: 60%;
          }

          .genres{
            flex-direction: column;
            align-items: flex-start;
          }

          .listgenres {
            flex-wrap: wrap;
          }
        }

        @media(max-width: 430px){
          article{
            flex-direction: column;
            justify-content: center;
          }

          .infotext {
            width: 100%;
            margin: 0;
          }

          h3{
            text-align: center;
          }

          iframe{
            width: 100%;
            height: 20em;
          }

        }

      `}</style>
    </>
  );
};

export default anime;

export async function getServerSideProps(context) {
  const { query } = context;
  const { anime } = query;
  const res = await fetch(`https://api.jikan.moe/v3/anime/${anime}`);
  const info = await res.json();

  return {
    props: { info },
  };
}
