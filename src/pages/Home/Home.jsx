import './home.css'

function Home() {
    return (
        <div className="home-container">
            <div className='home-items-container'>
                <img src="./person.jpg" alt="" className='user-img' />
                <span style={{color: '#fff'}} className='title-main '><h1><span className='bi bi-person-fill'></span>&nbsp; <b>MY PROFILE</b>
                </h1>
                    <span className='persona'>
                        <span>
                            <p>SRIPRATHUM UNIVERSITY - CSI</p>
                            <h3>ชื่อ  : ปัณณวัฒน์ คงเมือง</h3>
                            <h3>อายุ : 18 ปี</h3>
                            <h3>ระดับการศึกษา : ปริญญาตรี</h3>
                            <h3>งานอดิเรก : สะสมและจำหน่ายArttoy</h3>
                            <h2 className='title-contract mt-4'><span className='bi bi-telephone-fill'></span>&nbsp;&nbsp;<b>CONTRACT</b></h2>
                            <h3>TEL : 095-926-6632</h3>
                            <h3>EMAIL : Bmnatnatcha@gmail.com</h3>
                        </span>
                        {/* <span>
                            <h2>
                                <b>
                                    ประวัติการศึกษา &nbsp;
                                    <span className='bi bi-book-half'></span>
                                </b>
                            </h2>
                            <p>educational record</p>
                            <h3 style={{ textAlign: 'center' }}>ประถมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>โรงเรียน ชัยพิทยพัฒน์</h5>
                            <h3 style={{ textAlign: 'center' }} className='bi bi-arrow-down'></h3>
                            <h3 style={{ textAlign: 'center' }}>มัธยมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>โรงเรียน ทวีธาภิเศก</h5>
                            <h3 style={{ textAlign: 'center' }} className='bi bi-arrow-down'></h3>
                            <h3 style={{ textAlign: 'center' }}>อุดมศึกษา</h3>
                            <h5 style={{ textAlign: 'center' }}>มหาวิทยาลัย ศรีปทุม</h5>
                        </span> */}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Home;