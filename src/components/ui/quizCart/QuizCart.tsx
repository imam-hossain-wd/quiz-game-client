import Image from "next/image";
import Link from "next/link";

const QuizCart = ({ category }: any) => {
  return (
    <div className="bg-white p-5 shadow-lg rounded">
        <div key={category.id}>
          <Image
            className="rounded w-full"
            src={category.image}
            width={280}
            height={250}
            alt={category.name}
          />
          <p className="text-lg text-center mt-3 font-bold">{category.name}</p>
        </div>
    </div>
  );
};

export default QuizCart;
