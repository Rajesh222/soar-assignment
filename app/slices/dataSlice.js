import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/getDashboardData");

  const mockData = {
    weeklyActivity: {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Deposit",
          data: [200, 300, 250, 400, 150, 300, 350],
          backgroundColor: "#396AFF", // Blue
          borderRadius: 10,
          barThickness: 10,
        },
        {
          label: "Withdraw",
          data: [500, 400, 300, 500, 300, 400, 450],
          backgroundColor: "#232323", // Black
          borderRadius: 10,
          barThickness: 10,
        },
      ],
    },
    expense: {
      labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
      datasets: [
        {
          label: "Expense Distribution",
          data: [30, 15, 20, 35],
          backgroundColor: ["#2C3E50", "#E67E22", "#357EDD", "#1C1C1C"],
          borderWidth: 2,
          borderColor: "#fff",
          hoverOffset: 6,
          borderJoinStyle: "square",
          rotation: -90,
          circumference: 360,
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowBlur: 10,
        },
      ],
    },
    balanceHistory: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Balance",
          data: [100, 200, 400, 800, 300, 500, 650, 700, 900, 1000, 1200, 800],
          borderColor: "#1814F3",
          backgroundColor: "#2D60FF40",
          fill: true,
          tension: 0.4,
        },
      ],
    },
    cards: [
      {
        id: 1,
        balance: 5756,
        cardHolder: "Rajesh Kumar",
        validThru: "12/22",
        cardNumber: "3778 **** **** 1234",
        cardType: "master_card",
      },
      {
        id: 2,
        balance: 5756,
        cardHolder: "Eddy Cusuma",
        validThru: "06/23",
        cardNumber: "3778 **** **** 3763",
        cardType: "master_card",
      },
    ],
    transactions: [
      {
        id: 1,
        title: "Deposit from my Card",
        date: "28 January 2021",
        amount: "-$850",
        amountClass: "text-red-500",
        icon: (
          <div className="bg-yellow-100 text-yellow-500 p-3 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z"
                fill="#FFBB38"
              />
              <path
                d="M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z"
                fill="#FFBB38"
              />
              <path
                d="M20.4422 18.7463H3.88281C3.66525 18.7463 3.4566 18.6599 3.30276 18.506C3.14893 18.3522 3.0625 18.1436 3.0625 17.926V15.1708C3.0625 14.9533 3.14893 14.7446 3.30276 14.5908C3.4566 14.437 3.66525 14.3505 3.88281 14.3505H20.4422C20.6597 14.3505 20.8684 14.437 21.0222 14.5908C21.1761 14.7446 21.2625 14.9533 21.2625 15.1708V17.926C21.2625 18.1436 21.1761 18.3522 21.0222 18.506C20.8684 18.6599 20.6597 18.7463 20.4422 18.7463ZM4.70312 17.1057H19.6219V15.9911H4.70312V17.1057Z"
                fill="#FFBB38"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 2,
        title: "Deposit Paypal",
        date: "25 January 2021",
        amount: "+$2,500",
        amountClass: "text-green-500",
        icon: (
          <div className="bg-blue-100 text-blue-500 p-3 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.995 8.38251C22.9812 6.85223 22.3641 5.3892 21.2779 4.31119C20.1917 3.23318 18.7241 2.62725 17.1937 2.62501H8.74998C8.54025 2.62231 8.33653 2.69504 8.17592 2.82995C8.01532 2.96485 7.90852 3.15296 7.87498 3.36001L4.88248 22.1288C4.86378 22.253 4.87208 22.3799 4.90681 22.5007C4.94153 22.6215 5.00188 22.7334 5.08373 22.8288C5.16505 22.9264 5.26667 23.0052 5.38151 23.0596C5.49635 23.114 5.62166 23.1427 5.74873 23.1438H9.36248L9.16998 24.36C9.14953 24.4861 9.15693 24.6151 9.19165 24.738C9.22637 24.8609 9.28757 24.9747 9.37096 25.0714C9.45435 25.1681 9.55789 25.2454 9.67433 25.2979C9.79077 25.3503 9.91728 25.3767 10.045 25.375H14.1137C14.3222 25.378 14.5249 25.3065 14.6853 25.1734C14.8457 25.0403 14.9533 24.8542 14.9887 24.6488L15.8637 19.3025H18.62C20.3451 19.2956 21.9974 18.606 23.2156 17.3845C24.4338 16.163 25.1189 14.5089 25.1212 12.7838V12.5388C25.1203 11.7273 24.9272 10.9275 24.5576 10.2051C24.188 9.48266 23.6525 8.85807 22.995 8.38251ZM9.49373 4.37501H17.1937C18.1117 4.37783 19.0017 4.69168 19.7184 5.26535C20.4351 5.83902 20.9362 6.63865 21.14 7.53376C20.7614 7.44498 20.3738 7.40093 19.985 7.40251H12.6875C12.4777 7.39981 12.274 7.47254 12.1134 7.60745C11.9528 7.74235 11.846 7.93046 11.8125 8.13751L11.2962 11.375C11.2591 11.6071 11.3157 11.8444 11.4535 12.0347C11.5914 12.2251 11.7992 12.3529 12.0312 12.39C12.2633 12.4271 12.5006 12.3706 12.691 12.2327C12.8813 12.0949 13.0091 11.8871 13.0462 11.655L13.4487 9.13501H20.0025C20.4219 9.13721 20.8373 9.21732 21.2275 9.37126C21.0611 10.741 20.4003 12.0029 19.3691 12.9197C18.3378 13.8365 17.0073 14.3451 15.6275 14.35H11.5675C11.359 14.347 11.1563 14.4185 10.9959 14.5516C10.8355 14.6848 10.7279 14.8708 10.6925 15.0763L9.62498 21.3938H6.77248L9.49373 4.37501ZM23.3712 12.7838C23.3689 14.0448 22.8682 15.2538 21.9781 16.1471C21.0881 17.0404 19.881 17.5456 18.62 17.5525H15.12C14.9115 17.5495 14.7088 17.621 14.5484 17.7541C14.388 17.8873 14.2804 18.0733 14.245 18.2788L13.37 23.625H11.06L11.2525 22.4088L12.3025 16.1175H15.61C17.2435 16.1127 18.8295 15.5677 20.121 14.5675C21.4124 13.5672 22.3368 12.1679 22.75 10.5875C23.1561 11.1569 23.3734 11.8394 23.3712 12.5388V12.7838Z"
                fill="#396AFF"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 3,
        title: "Jemi Wilson",
        date: "21 January 2021",
        amount: "+$5,400",
        amountClass: "text-green-500",
        icon: (
          <div className="bg-teal-100 text-teal-500 p-3 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0001 11.379C14.4962 11.379 14.9013 11.7831 14.9013 12.2792C14.9013 12.7319 15.2693 13.0988 15.7219 13.0988C16.1736 13.0988 16.5415 12.7319 16.5415 12.2792C16.5415 11.1671 15.817 10.2287 14.8197 9.88556V9.42048C14.8197 8.96884 14.4528 8.59987 14.0001 8.59987C13.5464 8.59987 13.1795 8.96884 13.1795 9.42048V9.88556C12.1822 10.2287 11.4597 11.1671 11.4597 12.2792C11.4597 13.6817 12.5987 14.8206 14.0001 14.8206C14.4962 14.8206 14.9013 15.2257 14.9013 15.7218C14.9013 16.2189 14.4962 16.6231 14.0001 16.6231C13.504 16.6231 13.0999 16.2189 13.0999 15.7218C13.0999 15.2691 12.732 14.9012 12.2793 14.9012C11.8256 14.9012 11.4597 15.2691 11.4597 15.7218C11.4597 16.8339 12.1822 17.7713 13.1795 18.1144V18.5795C13.1795 19.0332 13.5464 19.4011 14.0001 19.4011C14.4528 19.4011 14.8197 19.0332 14.8197 18.5795V18.1144C15.817 17.7713 16.5415 16.8339 16.5415 15.7218C16.5415 14.3204 15.4016 13.1804 14.0001 13.1804C13.504 13.1804 13.0999 12.7763 13.0999 12.2792C13.0999 11.7831 13.504 11.379 14.0001 11.379ZM20.872 18.5547C21.274 18.7666 21.769 18.6126 21.9799 18.2136C22.662 16.9248 23.0217 15.4676 23.0217 14C23.0217 9.02671 18.9734 4.97947 14.0001 4.97947C9.0258 4.97947 4.97856 9.02671 4.97856 14C4.97856 18.9743 9.0258 23.0215 14.0001 23.0215C15.446 23.0215 16.8826 22.6722 18.1548 22.0097C18.5569 21.802 18.7129 21.3049 18.5042 20.9039C18.2954 20.5039 17.8004 20.3447 17.3973 20.5545C16.3441 21.1044 15.2 21.3824 14.0001 21.3824C9.93013 21.3824 6.61771 18.071 6.61771 14C6.61771 9.93104 9.93013 6.61862 14.0001 6.61862C18.0701 6.61862 21.3825 9.93104 21.3825 14C21.3825 15.202 21.0869 16.3936 20.5309 17.4457C20.318 17.8467 20.471 18.3428 20.872 18.5547ZM14.0001 1.69702C11.6241 1.69702 9.31725 2.37707 7.3298 3.66173C6.94844 3.90771 6.83992 4.41517 7.08589 4.7955C7.3329 5.17583 7.83829 5.28332 8.22069 5.03941C9.94046 3.92735 11.9414 3.33824 14.0001 3.33824C19.8798 3.33824 24.6619 8.12135 24.6619 14C24.6619 19.8797 19.8798 24.6628 14.0001 24.6628C8.12044 24.6628 3.33733 19.8797 3.33733 14C3.33733 11.9609 3.91507 9.97755 5.00956 8.26708C5.25347 7.88468 5.14185 7.37722 4.75945 7.13331C4.37808 6.8894 3.87063 7.00102 3.62775 7.38239C2.36479 9.35744 1.69714 11.6477 1.69714 14C1.69714 20.785 7.21508 26.303 14.0001 26.303C20.7841 26.303 26.3031 20.785 26.3031 14C26.3031 7.21703 20.7841 1.69702 14.0001 1.69702Z"
                fill="#16DBCC"
              />
            </svg>
          </div>
        ),
      },
      {
        id: 4,
        title: "Deposit from my Card",
        date: "15 January 2021",
        amount: "-$1,200",
        amountClass: "text-red-500",
        icon: (
          <div className="bg-yellow-100 text-yellow-500 p-3 rounded-full">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z"
                fill="#FFBB38"
              />
              <path
                d="M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z"
                fill="#FFBB38"
              />
              <path
                d="M20.4422 18.7463H3.88281C3.66525 18.7463 3.4566 18.6599 3.30276 18.506C3.14893 18.3522 3.0625 18.1436 3.0625 17.926V15.1708C3.0625 14.9533 3.14893 14.7446 3.30276 14.5908C3.4566 14.437 3.66525 14.3505 3.88281 14.3505H20.4422C20.6597 14.3505 20.8684 14.437 21.0222 14.5908C21.1761 14.7446 21.2625 14.9533 21.2625 15.1708V17.926C21.2625 18.1436 21.1761 18.3522 21.0222 18.506C20.8684 18.6599 20.6597 18.7463 20.4422 18.7463ZM4.70312 17.1057H19.6219V15.9911H4.70312V17.1057Z"
                fill="#FFBB38"
              />
            </svg>
          </div>
        ),
      },
    ],
    quickTransferData: [
      {
        setItem: [
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/a0bd/5a15/758288ff5165913073569be101d5c4fb?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCQmTdpybovvvEYK6t4cEOE8tVrq0aLtWmYYxffZyEpsOQHd8KSVQ1ekuT2uxFyDwWN6f-KMMaVyxdaPFtWjYrTJDfcfl57yYYq6TipV0XAKf-50kr3rPxrYPTF8ZMim09Z255xP0oR3S7eGsgYlSAaK75MlMXXwTfX9yLo5zsXvHOKXQbxqBsdIK3Gh1mtbbdNyjxOJvlP7VS9HhSeLnbm5F6oBHNipqQDxrNbiYndkX1wDMrHUBQPrz6WQ5U1xgzZlwsxADgzdvju2ClfruXCOfHxh4U68oyitOcDjq1-RKrBrAveXojiS47Ekauk0YQzN2BBlbhvdvkLz3qx73A__",
          },
          {
            name: "Randy Press",
            role: "Director",
            image:
              "https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RL4xUPYtT9Y4JOZ1gDfjWRTxXn1RTzkoLEMDLKHU~6zuPKK2aggTqhOMHuBiGjnM47Dy2TZMyxyJla0UaQD8LuVwQJ68ye7xaI1hTxLwHbhzxZOXwglHLcppm2SnD18iw7nG7sLaqMu4Yl2QUK7KGXL1qV6WXmoILvxb45D36sfpbePdil7nZMXRTEXMyl8F0HtneFiqPY7nE9j9EbAVaUN~XFvsWwTObtXqmyCUnLWr4-R0me-f06Vpbx3jIybkfx8sUFCtN-J2jY-FdY8SzVsTdu29vbZwA5Uty5WVoPbcq3fdc5ESJG-~GDz-97FNSKE5~BsDnJlOouGG4JBWhg__",
          },
          {
            name: "Workman",
            role: "Designer",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
        ],
      },
      {
        setItem: [
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Workman",
            role: "Designer",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
        ],
      },
      {
        setItem: [
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Workman",
            role: "Designer",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
        ],
      },
      {
        setItem: [
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Workman",
            role: "Designer",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
        ],
      },
      {
        setItem: [
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Workman",
            role: "Designer",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
          {
            name: "Livia Bator",
            role: "CEO",
            image:
              "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFgPLYeMjn13ASkH9b3yKKSRrUG38Q80fqAXc4bGeipgOl5jIC919yFSMQJ2S7Tp5jZ~8zPvWlLEE1DV9~fbOKE9hfRwMt4TKsQPxx25KOaocj5PhzSnhZ0Iizs2x2BGJahp6CattYtel~8U3k2TXpdzpxkf1JWdn5Nl2pqrA8zuxfkBaIe~xN~Q2Sg2mw-ZAZ1V2KFinWkOUK2TFDTK5rkBPPENhFfTt4HTlYKBDenklhrWMBblCpVCMSpCNg3bBQvu81~4pl9-A82jrqb6D3xrmqQ6NO4ZyWAJ5fzfN1Hn1cPTEzpP2dpEGsLoadpgq~CQe9FlnJfmj52gvHunjw__",
          },
        ],
      },
    ],
  };
  return mockData;
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   const data = await response.json();
  //   return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
