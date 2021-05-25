import Layout from '../../components/Layout';

const anime = ({ info }) => {

    const date = new Date(info.aired.from).toDateString()

    return (
        <Layout>
            <article className="infoanime">
                <div className="infoanime__sec1">
                    <img src={info.image_url} alt={info.title} />
                    <div>
                        <h3>{info.title}</h3>
                        <p>{info.synopsis}</p>
                        <p>Date: {date}</p>
                        <div className="infoanime__genres" >
                            <p className="infoanime__genres-p" >Genres:</p>
                            <div className="infoanime__listgenres">
                                {
                                    info.genres.map(el => <p key={el.mal_id} className="infoanime__item-genre" >{el.name}</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {
                    info.trailer_url &&
                    <iframe width="560" height="443" src={info.trailer_url} title={info.title} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="iframe" ></iframe>
                }

            </article>
        </Layout>
    )
}

export default anime

export async function getServerSideProps(context) {
    const { query } = context
    const { anime } = query
    const res = await fetch(`https://api.jikan.moe/v3/anime/${anime}`)
    let info = await res.json()

    return {
        props: { info }
    }
}