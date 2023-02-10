import React, {useState, useEffect} from 'react';
import './Pagination.scss';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    perPage: number;
}

export const Pagination: React.FC<Props> = ({perPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${perPage}&_page=${currentPage}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then((res) => {
                setTotalPages(Math.ceil(Number(res.headers.get('x-total-count')) / perPage));
                return res.json();
            })
            .then((data) => setPosts(data as Post[]));
    }, [currentPage, perPage]);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages && i <= 5; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={number === currentPage ? 'active' : ''}
                        onClick={() => handlePageClick(number)}
                    >
                        {number}
                    </li>
                ))}
            </ul>
            <div className="total-pages">Total Pages: {totalPages}</div>
            <ul className="posts">
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
