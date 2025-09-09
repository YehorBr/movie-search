import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Movies } from "./movies/Movies";
import { MovieDetails } from "./Api/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { getMovieReviews } from "./Api/serverApi";
import { getMovieDetails } from "./Api/serverApi";
import { getMovieCredits } from "./Api/serverApi";
import { searchMovie } from "./Api/serverApi";
import { getTrending } from "./Api/serverApi";
import { HomePage } from "./Home/Home";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy";
import { Terms } from "./TermsOfService/TermsOfService";

export const routing = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: getTrending,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path:"/privacy-policy",
        element: <PrivacyPolicy/>,
      },
      {
        path:"terms-of-service",
        element: <Terms/>
      },
      {
        path: "/movies/:type/:movieId",
        element: <MovieDetails />,
        loader: getMovieDetails,
        children: [
          {
            path: "/movies/:type/:movieId/cast",
            element: <Cast />,
            loader: getMovieCredits,
          },
          {
            path: "/movies/:type/:movieId/reviews",
            element: <Reviews />,
            loader: getMovieReviews,
          },
        ],
      },
    ],
  },
]);
