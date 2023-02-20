import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormPost from "../Components/FormPost";
import MySelectet from "../Components/MySelect";
import PostList from "../Components/PostList";

function Home () {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: "descripting"},
        {id: 2, title: "Python", body: "scripting"},
        {id: 3, title: "c++", body: "compileted"},
    ])

    const dataOptions = [
        {
            value: "title",
            name: "По названию"
        },
        {
            value: "body",
            name: "По содержимому"
        },
    ]

    const [selectedSort, setSelectedSort] = useState('')

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const createPosts = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts([...posts.filter(p => p.id !== post.id)])
    }

    return(
        <Container>
            <Row className="justify-content-center mb-4">
                <Col className="col-7">
                    <FormPost create={createPosts}/>
                </Col>
            </Row>

            <Row className="justify-content-center mb-4">
                <Col className="col-7">
                    <MySelectet 
                        options={dataOptions}
                        defaultValue="Сортировка"
                        value={selectedSort}
                        onChange={sortPost}
                    />
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col className="col-7">
                    {posts.length !== 0
                    ?
                        posts.map((post, index) => 
                            <PostList remove={removePost} key={post.id} number={index + 1} post={post}/>
                        )
                    :
                        <h1 className="text-center">Посты не найдены</h1>
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default Home