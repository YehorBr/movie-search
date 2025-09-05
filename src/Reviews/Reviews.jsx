import { useLoaderData } from "react-router-dom";

export const Reviews =() => {

    const reviewsData = useLoaderData()
    const revs = reviewsData.results
    console.log(revs);
    
    return <>
        <h2>Reviews</h2>

        <ul>
            {revs.map((rev)=>{
                const created = rev.created_at.slice(0,10);
                const date = new Date(created)

                const options = {day: "numeric", month: "long", year: "numeric",}
                const normDate = date.toLocaleDateString("en-EN", options)

              return  <li key={rev.id}>
                <div>
                    <h3>{rev.author_details.username}</h3>
                    <p>{normDate}</p>
                </div>

                    <p>{rev.content}</p>
                </li>
            })}
        </ul>
    </>
}