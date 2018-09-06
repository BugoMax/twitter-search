
// import React from 'react';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
//
// class GridListT extends React.Component {
//
//     render() {
//
//         return <div>
//
//             <GridList cellHeight={200} spacing={1} className={classes.gridList}>
//                 {tileData.map(tile => (
//                     <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
//                         <img src={tile.img} alt={tile.title} />
//                         <GridListTileBar
//                             title={tile.title}
//                             titlePosition="top"
//                             actionIcon={
//                                 <IconButton className={classes.icon}>
//                                     <StarBorderIcon />
//                                 </IconButton>
//                             }
//                             actionPosition="left"
//                             className={classes.titleBar}
//                         />
//                     </GridListTile>
//                 ))}
//             </GridList>
//
//         </div>;
//     }
// }
//
// export default GridListT;
