import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const LogoWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 3rem 0;
  `
);

const Title = styled.h1(
  ({ theme, color }) => css`
    font-size: 2.5rem;
    color: ${theme.colors.black};
    font-weight: 800;
    margin: 5rem 0 0;
  `
);

function Logo(props) {
  return (
    <LogoWrapper>
      <svg
        width={280}
        height={68}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.228 57.423c-2.475 0-4.778-.282-6.909-.846-2.13-.595-3.87-1.426-5.217-2.491-.47-.345-.815-.705-1.034-1.081-.188-.407-.282-.909-.282-1.504 0-.783.235-1.473.705-2.068.501-.595 1.065-.893 1.692-.893.345 0 .674.063.987.188.345.094.752.282 1.222.564 1.347.846 2.71 1.473 4.089 1.88 1.379.376 2.898.564 4.559.564 2.068 0 3.65-.345 4.747-1.034 1.097-.69 1.645-1.676 1.645-2.961 0-.971-.517-1.755-1.551-2.35-1.003-.595-2.804-1.16-5.405-1.692-2.914-.595-5.248-1.316-7.003-2.162-1.723-.846-2.992-1.896-3.807-3.149-.783-1.253-1.175-2.773-1.175-4.559 0-1.974.564-3.744 1.692-5.311 1.16-1.598 2.742-2.836 4.747-3.713 2.037-.909 4.324-1.363 6.862-1.363 4.45 0 8.115 1.112 10.998 3.337.47.376.799.768.987 1.175.219.376.329.846.329 1.41 0 .783-.251 1.473-.752 2.068-.47.595-1.018.893-1.645.893-.345 0-.674-.047-.987-.141-.282-.094-.69-.298-1.222-.611-1.285-.815-2.475-1.426-3.572-1.833-1.065-.407-2.428-.611-4.089-.611-1.911 0-3.415.376-4.512 1.128-1.097.72-1.645 1.723-1.645 3.008 0 .752.204 1.379.611 1.88.439.47 1.144.893 2.115 1.269 1.003.376 2.413.768 4.23 1.175 4.261.94 7.316 2.146 9.165 3.619 1.88 1.473 2.82 3.494 2.82 6.063 0 2.005-.564 3.776-1.692 5.311-1.097 1.535-2.663 2.726-4.7 3.572-2.005.846-4.34 1.269-7.003 1.269zm32.4-24.064c1.974 0 3.729.517 5.264 1.551 1.567 1.003 2.773 2.428 3.619 4.277.878 1.817 1.316 3.917 1.316 6.298 0 2.381-.438 4.48-1.316 6.298-.846 1.786-2.036 3.165-3.572 4.136-1.535.971-3.305 1.457-5.311 1.457-1.566 0-2.992-.313-4.277-.94-1.253-.658-2.224-1.567-2.914-2.726v8.883c0 .94-.313 1.692-.94 2.256-.626.564-1.457.846-2.491.846-1.096 0-1.989-.298-2.679-.893-.658-.595-.987-1.379-.987-2.35V36.79c0-1.003.314-1.802.94-2.397.658-.627 1.52-.94 2.585-.94 1.066 0 1.912.313 2.538.94.627.595.94 1.394.94 2.397v.376c.69-1.19 1.677-2.115 2.961-2.773 1.285-.69 2.726-1.034 4.324-1.034zm-2.068 18.612c1.661 0 2.946-.548 3.854-1.645.909-1.128 1.363-2.742 1.363-4.841 0-2.13-.454-3.776-1.363-4.935-.908-1.19-2.193-1.786-3.854-1.786-1.66 0-2.945.58-3.854 1.739-.908 1.128-1.363 2.757-1.363 4.888 0 2.1.455 3.729 1.363 4.888.909 1.128 2.194 1.692 3.854 1.692zm35.122-1.833c.627 0 1.128.25 1.504.752.408.501.611 1.144.611 1.927 0 .533-.156 1.034-.47 1.504-.313.439-.752.815-1.316 1.128-1.065.564-2.303 1.034-3.713 1.41-1.41.345-2.71.517-3.901.517-2.506 0-4.7-.486-6.58-1.457-1.848-.971-3.274-2.35-4.277-4.136-1.002-1.817-1.504-3.948-1.504-6.392 0-2.35.486-4.434 1.457-6.251.972-1.817 2.319-3.227 4.042-4.23 1.724-1.034 3.682-1.551 5.875-1.551 2.1 0 3.933.47 5.499 1.41 1.598.909 2.836 2.225 3.713 3.948.878 1.692 1.316 3.682 1.316 5.969 0 .69-.172 1.222-.517 1.598-.313.345-.767.517-1.363.517h-13.16c.22 1.849.784 3.196 1.692 4.042.909.815 2.209 1.222 3.901 1.222.909 0 1.724-.11 2.444-.329.721-.22 1.52-.517 2.397-.893a12.8 12.8 0 011.269-.47c.408-.157.768-.235 1.081-.235zm-8.084-11.891c-1.347 0-2.428.439-3.243 1.316-.814.846-1.3 2.084-1.457 3.713h9.071c-.094-1.66-.517-2.914-1.269-3.76-.72-.846-1.754-1.269-3.102-1.269zm18.199 19.035c-1.034 0-1.896-.282-2.585-.846-.658-.564-.987-1.394-.987-2.491V26.967c0-1.097.329-1.927.987-2.491.689-.564 1.551-.846 2.585-.846 1.003 0 1.833.282 2.491.846.689.564 1.034 1.394 1.034 2.491v26.978c0 1.097-.345 1.927-1.034 2.491-.658.564-1.488.846-2.491.846zm12.53 0c-1.034 0-1.895-.282-2.585-.846-.658-.564-.987-1.394-.987-2.491V26.967c0-1.097.329-1.927.987-2.491.69-.564 1.551-.846 2.585-.846 1.003 0 1.833.282 2.491.846.69.564 1.034 1.394 1.034 2.491v26.978c0 1.097-.344 1.927-1.034 2.491-.658.564-1.488.846-2.491.846zm40.402-4.747c.25.564.376 1.065.376 1.504 0 .877-.361 1.63-1.081 2.256a3.56 3.56 0 01-2.397.893c-.596 0-1.16-.157-1.692-.47-.533-.345-.94-.846-1.222-1.504l-2.491-5.546h-15.933l-2.491 5.546c-.282.658-.69 1.16-1.222 1.504a3.13 3.13 0 01-1.692.47c-.909 0-1.724-.298-2.444-.893-.721-.627-1.081-1.379-1.081-2.256 0-.439.125-.94.376-1.504l12.69-26.649c.344-.752.861-1.316 1.551-1.692a4.268 4.268 0 012.209-.611c.814 0 1.566.204 2.256.611a4.16 4.16 0 011.598 1.692l12.69 26.649zm-21.949-8.413h10.951l-5.452-12.22-5.499 12.22zm40.089-10.763c1.974 0 3.729.517 5.264 1.551 1.567 1.003 2.773 2.428 3.619 4.277.878 1.817 1.316 3.917 1.316 6.298 0 2.381-.438 4.48-1.316 6.298-.846 1.786-2.036 3.165-3.572 4.136-1.535.971-3.305 1.457-5.311 1.457-1.566 0-2.992-.313-4.277-.94-1.253-.658-2.224-1.567-2.914-2.726v8.883c0 .94-.313 1.692-.94 2.256-.626.564-1.457.846-2.491.846-1.096 0-1.989-.298-2.679-.893-.658-.595-.987-1.379-.987-2.35V36.79c0-1.003.314-1.802.94-2.397.658-.627 1.52-.94 2.585-.94 1.066 0 1.912.313 2.538.94.627.595.94 1.394.94 2.397v.376c.69-1.19 1.677-2.115 2.961-2.773 1.285-.69 2.726-1.034 4.324-1.034zm-2.068 18.612c1.661 0 2.946-.548 3.854-1.645.909-1.128 1.363-2.742 1.363-4.841 0-2.13-.454-3.776-1.363-4.935-.908-1.19-2.193-1.786-3.854-1.786-1.66 0-2.945.58-3.854 1.739-.908 1.128-1.363 2.757-1.363 4.888 0 2.1.455 3.729 1.363 4.888.909 1.128 2.194 1.692 3.854 1.692zm30.893-18.612c1.974 0 3.728.517 5.264 1.551 1.566 1.003 2.773 2.428 3.619 4.277.877 1.817 1.316 3.917 1.316 6.298 0 2.381-.439 4.48-1.316 6.298-.846 1.786-2.037 3.165-3.572 4.136-1.536.971-3.306 1.457-5.311 1.457-1.567 0-2.993-.313-4.277-.94-1.254-.658-2.225-1.567-2.914-2.726v8.883c0 .94-.314 1.692-.94 2.256-.627.564-1.457.846-2.491.846-1.097 0-1.99-.298-2.679-.893-.658-.595-.987-1.379-.987-2.35V36.79c0-1.003.313-1.802.94-2.397.658-.627 1.519-.94 2.585-.94 1.065 0 1.911.313 2.538.94.626.595.94 1.394.94 2.397v.376c.689-1.19 1.676-2.115 2.961-2.773 1.284-.69 2.726-1.034 4.324-1.034zm-2.068 18.612c1.66 0 2.945-.548 3.854-1.645.908-1.128 1.363-2.742 1.363-4.841 0-2.13-.455-3.776-1.363-4.935-.909-1.19-2.194-1.786-3.854-1.786-1.661 0-2.946.58-3.854 1.739-.909 1.128-1.363 2.757-1.363 4.888 0 2.1.454 3.729 1.363 4.888.908 1.128 2.193 1.692 3.854 1.692z"
          fill="#BE4FE4"
        />
        <g clipPath="url(#prefix__clip0)">
          <path
            d="M57.75 21h-10.5v7.875H63V26.25A5.25 5.25 0 0057.75 21z"
            fill="#CF84EA"
          />
          <path
            d="M15.75 21a5.25 5.25 0 00-5.25 5.25v31.5A5.25 5.25 0 015.25 63l21-2.625 21 2.625a5.25 5.25 0 005.25-5.25v-31.5A5.25 5.25 0 0157.75 21h-42z"
            fill="url(#prefix__paint0_linear)"
          />
          <path
            d="M42 57.75v-2.625H0v2.625A5.25 5.25 0 005.25 63h42A5.25 5.25 0 0142 57.75z"
            fill="#CF84EA"
          />
          <path
            d="M10.5 57.75v-2.625H0v2.625A5.25 5.25 0 005.25 63h10.5a5.25 5.25 0 01-5.25-5.25z"
            fill="#CC7AE9"
          />
          <path
            d="M21 31.5h21v5.25H21V31.5zM21 42h21v5.25H21V42z"
            fill="#fff"
          />
          <path
            d="M42.927 12.133a.656.656 0 00-.656-.656 4.674 4.674 0 01-4.635-4.7.656.656 0 10-1.313 0 4.674 4.674 0 01-4.638 4.7.656.656 0 000 1.313 4.674 4.674 0 014.638 4.7.656.656 0 001.313 0 4.675 4.675 0 014.636-4.702.656.656 0 00.655-.655z"
            fill="#CC7AE9"
          />
          <path
            d="M26.85 6.227a.657.657 0 00-.657-.656 4.674 4.674 0 01-4.635-4.7.656.656 0 10-1.313 0 4.674 4.674 0 01-4.638 4.7.656.656 0 100 1.312 4.674 4.674 0 014.638 4.7.656.656 0 001.313 0 4.674 4.674 0 014.636-4.7.657.657 0 00.655-.656z"
            fill="#9717C4"
          />
          <path
            d="M12.083 12.133a.656.656 0 00-.656-.656 4.674 4.674 0 01-4.635-4.7.656.656 0 10-1.312 0 4.674 4.674 0 01-4.638 4.7.656.656 0 000 1.313 4.675 4.675 0 014.638 4.7.656.656 0 001.312 0 4.675 4.675 0 014.636-4.702.656.656 0 00.655-.655z"
            fill="#C061E1"
          />
        </g>
        <defs>
          <linearGradient
            id="prefix__paint0_linear"
            x1={7.875}
            y1={65.625}
            x2={55.125}
            y2={18.375}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9717C4" />
            <stop offset={1} stopColor="#CC7AE9" />
          </linearGradient>
          <clipPath id="prefix__clip0">
            <path fill="#fff" d="M0 0h63v63H0z" />
          </clipPath>
        </defs>
      </svg>
      <Title>NATO phonetic alphabet online translator</Title>
    </LogoWrapper>
  );
}

export default Logo;
