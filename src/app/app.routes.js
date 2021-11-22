import {startPageComponent} from "./pages/start-page.component";
import {categoryArtistsPageComponent} from "./pages/category-artists-page.component";
import {categoryPicturesPageComponent} from "./pages/category-pictures-page.components";
import {notFound} from "./common/not-found.component";
import {questionsPageArtistsComponent} from "./pages/questions-page-artists.component";
import {questionsPagePicturesComponent} from "./pages/questions-page-pictures.component";
import {scorePageComponent} from "./pages/score-page.component";
import {settingsPageComponent} from "./pages/settings-page.component";

export const appRoutes = [
    {
        path: '',
        component: startPageComponent
    },
    {
        path: 'categoryArtists',
        component: categoryArtistsPageComponent
    },
    {
        path: 'categoryPictures',
        component: categoryPicturesPageComponent
    },
    {
        path: '**',
        component: notFound
    },
    {
        path: 'questionsPageArtists',
        component: questionsPageArtistsComponent
    },
    {
        path: 'questionsPagePictures',
        component: questionsPagePicturesComponent
    },
    {
        path: 'scorePage',
        component: scorePageComponent
    },
    {
        path: 'settingsPage',
        component: settingsPageComponent
    }
]
