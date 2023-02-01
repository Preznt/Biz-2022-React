/**
c_name	VARCHAR(20)	NOT NULL	
c_tel	VARCHAR(15)	NOT NULL	
c_addr	VARCHAR(125)		
c_hobby	VARCHAR(20)		
 */

const ContactInput = () => {
  return (
    <>
      <label htmlFor="c_name">이름</label>
      <input name="c_name" id="c_name"></input>
      <label htmlFor="c_tel">전화번호</label>
      <input name="c_tel" id="c_tel"></input>
      <label htmlFor="c_addr">주소</label>
      <input name="c_addr" id="c_addr"></input>
      <label htmlFor="c_hobby">취미</label>
      <input name="c_hobby" id="c_hobby"></input>
    </>
  );
};

export default ContactInput;
