import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  ContactUs,
  Login,
  Register,
} from "./pages";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { RequireAuth } from "react-auth-kit";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#1e1e1e]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />

              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/profile"
                element={
                  <RequireAuth loginPath={"/login"}>
                    <Profile />
                  </RequireAuth>
                }
              />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#bb2649] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
