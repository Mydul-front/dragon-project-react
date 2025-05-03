import { FaEye, FaStar } from "react-icons/fa";
import { BsShareFill, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router";

const NavCard = ({ news }) => {
  const {id, title, image_url, details, author, rating, total_view } = news;

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    <div className="bg-white  shadow-sm p-5 space-y-3">
      {/* Author & actions */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p>{formatDate(author.published_date)}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-600">
          <BsBookmarkFill className="cursor-pointer" />
          <BsShareFill className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 leading-snug">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="w-full h-52 object-cover rounded-md"
      />

      {/* Description */}
      <p className="text-gray-700 text-sm">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <Link
          to={`/news-details/${id}`}
          className="text-blue-500 ml-1 cursor-pointer"
          onClick={() => window.scrollTo(0,200)}
        >
          Read More
        </Link>
      </p>

      {/* Footer: rating + views */}
      <div className="flex justify-between items-center pt-2 border-t text-sm text-gray-700">
        <div className="flex items-center gap-1 text-orange-400">
          <FaStar />
          <span className="text-gray-800 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
