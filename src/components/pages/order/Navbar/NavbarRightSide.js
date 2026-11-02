import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide() {
  // const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  // const displayToastNotification = () => {
  //   if (!isModeAdmin) {
  //     toast.info("Mode admin activé", {
  //       // icon: <FaUserSecret size={30} />,
  //       theme: "dark",
  //       position: "bottom-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     })
  //   }
  //   setIsModeAdmin(!isModeAdmin)
  // }

  return (
    <NavbarRightSideStyled>
      <Profile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`
