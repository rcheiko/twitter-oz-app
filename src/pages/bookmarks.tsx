import { css } from "@emotion/react";
import { breakpoints } from "../styles/global";
import { Theme, useTheme } from "../theme";
import Header from "../components/global/header";

export const bookmarks = (theme: Theme) => css`
.aaa {

}
`;

export default function Bookmarks() {
  const theme = useTheme();

  return (
    <div css={bookmarks(theme)}>
      <Header scrollToTop={true}>
        <h3>Bookmarks</h3>
        <p>Pseudo</p>
      </Header>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure repudiandae explicabo dolore sapiente inventore autem hic optio magni esse illum, enim temporibus velit aliquam cupiditate, facere, tempora quas deleniti dolor ab libero? Pariatur voluptates, facere maxime cumque sit obcaecati porro, sint eum alias unde, officia sed iusto placeat? Pariatur officiis quae tempora eius blanditiis suscipit architecto tenetur ipsum voluptatibus optio? Delectus ea accusamus veniam corporis quaerat officia laudantium, deserunt praesentium. Expedita deserunt voluptates sed, inventore porro magni eligendi eaque laboriosam tenetur? Dignissimos, atque. Consequatur culpa nesciunt, dolore iste inventore fuga dolorum qui quaerat odit architecto ullam voluptatibus eveniet sequi distinctio soluta perspiciatis possimus impedit, sunt ipsam unde! In voluptatem accusantium fuga aperiam, delectus saepe ullam cum nostrum excepturi provident, cupiditate veritatis quidem odio, quas magnam nesciunt. Impedit qui ipsa reiciendis distinctio assumenda iste incidunt blanditiis ducimus est enim. Voluptate unde minima consequuntur magni natus suscipit molestiae veritatis, debitis nesciunt consequatur aliquam odio aspernatur, architecto tempora commodi. Delectus ipsam blanditiis tenetur voluptatem aperiam, illum eveniet voluptates nulla sed similique dicta veniam itaque ut, deleniti recusandae ea nam exercitationem vel voluptas quod fuga! Sequi asperiores esse accusamus sunt perspiciatis expedita sapiente praesentium, nesciunt deleniti voluptates sint cupiditate! Autem aliquam unde accusamus odio dignissimos ipsum officia aliquid! Libero cum atque similique, repellat soluta dolore dolor illo ratione possimus corrupti mollitia minima facilis eos quod? Cum sed laboriosam veniam cumque, laudantium adipisci eaque. Sequi ex debitis nostrum autem amet veritatis itaque placeat officiis voluptatum aperiam. Dicta ea nisi maxime earum mollitia aperiam culpa sint dolorem nihil magnam ipsa omnis aliquid distinctio et nemo tenetur sed fugit officiis tempora illo, beatae recusandae saepe blanditiis. Vel eaque tenetur necessitatibus cum animi laborum modi! Itaque sunt fugiat amet commodi temporibus voluptas saepe minima deserunt quam, enim vero cum molestiae voluptatibus consectetur quibusdam? Repellendus, cumque error dolores minus architecto illo nam ut, quia eligendi aperiam voluptate dolorem consequuntur voluptatem facere, perspiciatis numquam! Vel laboriosam ex dicta magni tempore quisquam nisi quod, et, natus cupiditate voluptas doloremque quos amet. Maxime quae necessitatibus harum temporibus mollitia blanditiis ea, reprehenderit doloremque adipisci. Quos libero qui consequatur facere earum voluptas quo quia voluptatibus harum, voluptatum, natus minus esse ab recusandae vel nemo maxime quisquam pariatur veritatis. Dignissimos hic adipisci error veniam, tempora reiciendis itaque modi iusto porro libero! Ullam atque consequuntur perspiciatis temporibus minima quasi eos repellendus harum, unde aliquam nostrum laudantium sequi quidem est molestias, reiciendis excepturi, molestiae tenetur? Maiores distinctio veniam dicta fuga, esse eum impedit suscipit incidunt autem! Autem quibusdam perspiciatis quam reiciendis nemo voluptatum atque quo repellendus? Laboriosam doloremque debitis unde accusamus quis quod minima enim hic libero culpa. Similique incidunt debitis nihil itaque cupiditate, ipsam distinctio labore enim mollitia eligendi dolorem. Delectus perferendis harum illo. Voluptas similique mollitia delectus, eos voluptatem ratione magnam pariatur laboriosam totam recusandae dolorem corporis eligendi asperiores doloremque amet natus nulla fuga facere autem iste fugit cupiditate libero. Facilis perspiciatis nam, dignissimos sequi nulla voluptate tempora error laborum. Recusandae modi, inventore rerum, fugiat reiciendis, ducimus quo eaque quibusdam perspiciatis totam aliquam explicabo ipsum?</p>
    </div>
  );
}
